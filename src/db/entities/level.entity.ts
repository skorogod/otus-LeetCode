import { Column, Entity, PrimaryGeneratedColumn, OneToMany, ManyToMany, JoinTable } from "typeorm";
import { ILevel, ITask } from "../../types";
import { Task } from "./task.entity";


@Entity({name: 'levels'})
export class Level implements ILevel {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title: string

    @OneToMany(() => Task, (task) => task.level)
    tasks: ITask
}