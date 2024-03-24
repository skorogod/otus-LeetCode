import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { IRule } from "../../types";


@Entity({name: 'rules'})
export class Rule implements IRule {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title: string;

    @Column()
    description: string;
}