import {
    Column,
    Entity,
    PrimaryGeneratedColumn,
    OneToMany,
    ManyToOne,
  } from 'typeorm';
import { IUser } from '../interfaces/user.interface';
import { IRole } from 'src/role/interfaces/role.interface';
import { ITask } from 'src/task/interfaces/task.interface';
import { Role } from 'src/role/entities/role.entity';
import { Comment } from 'src/comment/entities/comment.entity';
import { Task } from 'src/task/entities/task.entity';
  
  @Entity({ name: 'users' })
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
    role: IRole;
  
    @OneToMany(() => Comment, (comment) => comment.user)
    comments: Comment[];
  
    @OneToMany(() => Task, (task) => task.user)
    tasks: ITask[];
  }
  