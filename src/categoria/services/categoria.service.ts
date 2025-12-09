import { 
    HttpException, 
    HttpStatus, 
    Injectable 
} from "@nestjs/common";
import { ILike, Repository } from "typeorm";
import { Categoria } from "../entities/categoria.entity";
import { InjectRepository } from "@nestjs/typeorm";

@Injectable()
export class CategoriaService {
    constructor(
        @InjectRepository(Categoria)
        private categoriaRepository: Repository<Categoria>,
    ) {}

    async findAll(): Promise<Categoria[]> {
        return this.categoriaRepository.find({
            relations: {
                produto: true,
            },
        });
    }

    async findById(id: number): Promise<Categoria> {
        const categoria = await this.categoriaRepository.findOne({
            where: { id },
            relations: {
                produto: true,
            },
        });
        if (!categoria) {
            throw new HttpException(`Categoria with ID ${id} not found`, HttpStatus.NOT_FOUND);
        }
        return categoria;
    }

    async findByDescricao(descricao: string): Promise<Categoria[]> {
        return this.categoriaRepository.find({
            where: { descricao: ILike(`%${descricao}%`) },
            relations: {
                produto: true,
            },
        });
    }

    async create(categoria: Categoria): Promise<Categoria> {
        return this.categoriaRepository.save(categoria);
    }

    async update(categoria: Categoria): Promise<Categoria> {
        const existingCategoria = await this.categoriaRepository.findOne({
            where: { id: categoria.id },
        });
        if (!existingCategoria) {
            throw new HttpException(`Categoria with ID ${categoria.id} not found`, HttpStatus.NOT_FOUND);
        }
        return this.categoriaRepository.save(categoria);
    }

    async delete(id: number): Promise<void> {
        const result = await this.categoriaRepository.delete(id);
        if (result.affected === 0) {
            throw new Error(`Categoria with ID ${id} not found`);
        }
    }

}
