import { Entity, Column, PrimaryGeneratedColumn, ManyToMany, JoinTable, ManyToOne, OneToMany } from "typeorm";
import { ITask, ILevels, IRole, IRule, IUser, IComment } from "../types";

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
}

@Entity({name: 'roles'})
export class Role implements IRole {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title: string

    @Column()
    description: string;

    @ManyToMany(() => Role)
    @JoinTable()
    rules: IRule[]

    @OneToMany(() => User, (user) => user.role)
    users: IUser[]
}

@Entity({name: 'rules'})
export class Rule implements IRule {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title: string;

    @Column()
    description: string;
}

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
}

@Entity({name: 'comments'})
export class Comment implements IComment {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    date: Date;

    @Column()
    text: string;

    @ManyToOne(() => Task, (task) => task.comments)
    task: ITask;

    @ManyToOne(() => User, (user) => user.comments)
    user: IUser;
}