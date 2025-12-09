import { IsNotEmpty } from "class-validator";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { Produto } from "../../produto/entities/produto.entity";
import { on } from "events";

@Entity({name: "tb_categorias"})
export class Categoria {
    @PrimaryGeneratedColumn()
    id: number;

    @IsNotEmpty()
    @Column({ length: 100, nullable: false })
    descricao: string;

    @OneToMany(() => Produto, (produto) => produto.categoria, {
        onDelete: "CASCADE",
    })
    produto: Produto[];
}