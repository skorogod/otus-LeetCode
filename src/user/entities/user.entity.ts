import {
    Column,
    Entity,
    PrimaryGeneratedColumn,
    OneToMany,
    ManyToOne,
    JoinColumn,
    ManyToMany,
    JoinTable,
  } from 'typeorm';
import { IUser } from '../interfaces/user.interface';
import { IRole } from 'src/role/interfaces/role.interface';
import { ITask } from 'src/task/interfaces/task.interface';
import { Role } from '../../role/entities/role.entity';
import { Comment } from '../../comment/entities/comment.entity';
import { Task } from '../../task/entities/task.entity';
  
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

    @Column({nullable:true})
    image: string;
  
    @ManyToOne(() => Role, (role) => role.users,{
      onDelete: 'RESTRICT',
      onUpdate: 'CASCADE',
      eager: true
    })
    @JoinColumn({name: 'role_id'})
    role: IRole;
  
    @OneToMany(() => Comment, (comment) => comment.user)
    comments: Comment[];
  
    @OneToMany(() => Task, (task) => task.user)
    tasks: ITask[];

    @Column({
      default: 0
    })
    views: number;

    @Column({
      default: 0
    })
    reputation: number;

    @Column({
      default: 0
    })
    discuss: number;

    @ManyToMany(() => Task, (task) => task.solvedUsers, {
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE',
      eager: true
    })
    @JoinTable({
      name: 'solved_tasks',
        joinColumn: {
          name: 'user_id',
          referencedColumnName: 'id'
        },
        inverseJoinColumn: {
          name: 'task_id',
          referencedColumnName: 'id'
        }
    })
    solvedTasks: ITask[]
  }
  