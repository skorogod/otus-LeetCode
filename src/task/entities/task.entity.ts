import {
    Column,
    Entity,
    PrimaryGeneratedColumn,
    OneToMany,
    ManyToOne,
  } from 'typeorm';
import { ITask } from '../interfaces/task.interface';
import { IComment } from 'src/comment/interfaces/comment.interface';
import { IUser } from 'src/user/interfaces/user.interface';
import { ITaskType } from 'src/task-type/interfaces/taskType.interface';
import { ILevel } from 'src/level/interfaces/level.interface';
import { Comment } from 'src/comment/entities/comment.entity';
import { User } from 'src/user/entities/user.entity';
import { Level } from 'src/level/entities/level.entity';
import { TaskType } from 'src/task-type/entities/task-type.entity';
  
  @Entity({ name: 'tasks' })
  export class Task implements ITask {
    @PrimaryGeneratedColumn()
    id: number;
  
    @Column()
    title: string;
  
    @Column()
    description: string;
  
    @ManyToOne(() => Level, (level) => level.tasks)
    level: ILevel;
  
    @Column('text', { array: true })
    tags: string[];
  
    @Column('text', { array: true })
    links: string[];
  
    @OneToMany(() => Comment, (comment) => comment.task)
    comments: IComment[];
  
    @ManyToOne(() => User, (user) => user.tasks)
    user: IUser;

    @ManyToOne( _ => TaskType, (taskType => taskType.tasks))
    taskType: ITaskType
  }
  