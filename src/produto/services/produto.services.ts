import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { ILike, Repository } from "typeorm";
import { Produto } from "../entities/produto.entity";
import { Categoria } from "../../categoria/entities/categoria.entity";
import { InjectRepository } from "@nestjs/typeorm";
import { CategoriaService } from "../../categoria/services/categoria.service";

@Injectable()
export class ProdutoServices {
    constructor(
        @InjectRepository(Produto)
        private  produtoRepository: Repository<Produto>,
        private categoriaService: CategoriaService,
    ) {}

    async findAll(): Promise<Produto[]> {
        return this.produtoRepository.find({ 
            relations:  {
                categoria: true,
            }
        });
    }

    async findById(id: number): Promise<Produto> {
        const produto = await this.produtoRepository.findOne({
            where: { id },
            relations: {
                categoria: true,
            }
        });

        if (!produto) {
            throw new  HttpException(`Produto com ID ${id} não encontrado.`, HttpStatus.NOT_FOUND);
        }
        return produto;
    }

    async findByNome(nome: string): Promise<Produto[]> {
        const produtos = await this.produtoRepository.find({
            where: { nome: ILike(`%${nome}%`) },
            relations: {
                categoria: true,
            }
        });
        if (produtos.length === 0) {
            throw new HttpException(`Nenhum produto encontrado com o nome ${nome}.`, HttpStatus.NOT_FOUND);
        }
        return produtos;
    }
    
    async create(produto: Produto): Promise<Produto> {
        return this.produtoRepository.save(produto);
    }

    async update(produto: Produto): Promise<Produto> {
        await this.findById(produto.id);

        await this.categoriaService.findById(produto.categoria.id);

        return this.produtoRepository.save(produto);
    }
}