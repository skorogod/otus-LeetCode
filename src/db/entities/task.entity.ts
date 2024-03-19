import { Column, Entity, PrimaryGeneratedColumn, OneToMany, ManyToOne } from "typeorm";
import { ITask, IComment, ILevels, IUser } from "../../types";
import { Comment } from "./comment.entity";
import { User } from "./user.entity";

@Entity({name: 'tasks'})
export class Task implements ITask{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title: string

    @Column()
    description: string;

    @Column()
    level: ILevels;

    @Column('text', {array: true})
    tags: string[];

    @Column('text', {array: true})
    links: string[];

    @OneToMany(() => Comment, (comment) => comment.task)
    comments: IComment[]

    @ManyToOne(() => User, (user) => user.tasks)
    user: IUser
}