import { Column, Entity, PrimaryGeneratedColumn, OneToMany, ManyToOne } from "typeorm";
import { ITask, IComment, ILevel, IUser } from "../../types";
import { Comment } from "./comment.entity";
import { User } from "./user.entity";
import { Level } from "./level.entity";

@Entity({name: 'tasks'})
export class Task implements ITask{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title: string

    @Column()
    description: string;

    @ManyToOne(() => Level, (level) => level.tasks)
    level: ILevel;

    @Column('text', {array: true})
    tags: string[];

    @Column('text', {array: true})
    links: string[];

    @OneToMany(() => Comment, (comment) => comment.task)
    comments: IComment[]

    @ManyToOne(() => User, (user) => user.tasks)
    user: IUser
}