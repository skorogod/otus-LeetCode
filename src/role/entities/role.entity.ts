import {
    Column,
    Entity,
    PrimaryGeneratedColumn,
    OneToMany,
    ManyToMany,
    JoinTable,
  } from 'typeorm';
import { IRule } from 'src/rule/interfaces/rule.interface';
import { IRole } from '../interfaces/role.interface';
import { IUser } from '../../user/interfaces/user.interface';
import { User } from '../../user/entities/user.entity';
  
  @Entity({ name: 'roles' })
  export class Role implements IRole {
    @PrimaryGeneratedColumn()
    id: number;
  
    @Column()
    title: string;
  
    @Column()
    description: string;
  
    @ManyToMany(() => Role)
    @JoinTable()
    rules: IRule[];
  
    @OneToMany(() => User, (user) => user.role)
    users: IUser[];
  }
  