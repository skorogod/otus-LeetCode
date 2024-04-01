import { Column, Entity, PrimaryGeneratedColumn, OneToMany, ManyToMany, JoinTable } from "typeorm";
import { IRule, IRole, IUser } from "../../types";
import { User } from "./user.entity";



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