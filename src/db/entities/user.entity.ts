import { Column, Entity, PrimaryGeneratedColumn, OneToMany, ManyToOne } from "typeorm";
import { IRole, ITask, IUser } from "../../types";
import { Role } from "./role.entity";
import { Comment } from "./comment.entity";
import { Task } from "./task.entity";


@Entity({name: 'users'})
export class User implements IUser {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    email: string;

    @Column()
    password: string;

    @Column()
    username: string;

    @ManyToOne(() => Role, (role) => role.users)
    role: IRole

    @OneToMany(() => Comment, (comment) => comment.user)
    comments: Comment[]

    @OneToMany(() => Task, (task) => task.user)
    tasks: ITask[]
}