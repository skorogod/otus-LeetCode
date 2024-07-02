import { Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn } from "typeorm";
import { ITag } from "../interfaces/tag.interface";
import { Task } from "../../task/entities/task.entity";
import { ITask } from "../../task/interfaces/task.interface";

@Entity({name: 'tags'})
export class Tag implements ITag{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title: string

    @ManyToMany(() => Task, (task) => task.tags, {
        onDelete: 'SET NULL',
        onUpdate: 'CASCADE'
    })
    @JoinTable({
        name: 'tasks_tags',
        joinColumn: {
            name: 'tag_id',
            referencedColumnName: 'id'
        },
        inverseJoinColumn: {
            name: 'task_id',
            referencedColumnName: 'id'
        }
    })
    tasks: ITask[];
}
