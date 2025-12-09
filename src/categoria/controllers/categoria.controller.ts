import { Controller } from "@nestjs/common";
import { CategoriaService } from "../services/categoria.service";

@Controller('/categoria')
export class CategoriaController {
    constructor(
        private readonly categoriaService: CategoriaService
    ) {}

    findAll() {
        return this.categoriaService.findAll();
    }

    findById(id: number) {
        return this.categoriaService.findById(id);
    }

    create(categoria: any) {
        return this.categoriaService.create(categoria);
    }

    update(categoria: any) {
        return this.categoriaService.update(categoria);
    }

    delete(id: number) {
        return this.categoriaService.delete(id);
    }
}