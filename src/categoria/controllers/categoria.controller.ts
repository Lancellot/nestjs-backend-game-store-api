import { 
    Controller, 
    Delete, 
    Get, 
    HttpCode, 
    HttpStatus, 
    Post, 
    Put 
} from "@nestjs/common";
import { CategoriaService } from "../services/categoria.service";

@Controller('/categoria')
export class CategoriaController {
    constructor(
        private readonly categoriaService: CategoriaService
    ) {}

    @Get()
    @HttpCode(HttpStatus.OK)
    findAll() {
        return this.categoriaService.findAll();
    }

    @Get('/:id')
    @HttpCode(HttpStatus.OK)
    findById(id: number) {
        return this.categoriaService.findById(id);
    }

    @Get('/descricao/:descricao')
    @HttpCode(HttpStatus.OK)
    findByDescricao(descricao: string) {
        return this.categoriaService.findByDescricao(descricao);
    }

    @Post()
    @HttpCode(HttpStatus.CREATED)
    create(categoria: any) {
        return this.categoriaService.create(categoria);
    }

    @Put()
    @HttpCode(HttpStatus.OK)
    update(categoria: any) {
        return this.categoriaService.update(categoria);
    }

    @Delete('/:id')
    @HttpCode(HttpStatus.NO_CONTENT)
    delete(id: number) {
        return this.categoriaService.delete(id);
    }
}