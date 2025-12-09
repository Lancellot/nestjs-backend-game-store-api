import { Module, Post } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Produto } from "./entities/produto.entity";

import { CategoriaModule } from "../categoria/categoria.module";
import { ProdutoServices } from "./services/produto.services";
import { ProdutoController } from "./controllers/produto.controller";

@Module({
    imports: [TypeOrmModule.forFeature([Produto]), CategoriaModule],
    controllers: [ProdutoController],
    providers: [ProdutoServices],
    exports: [],
})
export class ProdutoModule {}