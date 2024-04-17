import {
    Column,
    Entity,
    PrimaryGeneratedColumn,
    OneToMany,
    ManyToOne,
    JoinColumn,
  } from 'typeorm';
import { ITask } from '../interfaces/task.interface';
import { IComment } from 'src/comment/interfaces/comment.interface';
import { IUser } from 'src/user/interfaces/user.interface';
import { ITaskType } from 'src/task-type/interfaces/taskType.interface';
import { ILevel } from 'src/level/interfaces/level.interface';
import { Comment } from '../../comment/entities/comment.entity';
import { User } from '../../user/entities/user.entity';
import { Level } from '../../level/entities/level.entity';
import { TaskType } from '../../task-type/entities/task-type.entity';
  
  @Entity({ name: 'tasks' })
  export class Task implements ITask {
    @PrimaryGeneratedColumn()
    id: number;
  
    @Column()
    title: string;
  
    @Column()
    description: string;
  
    @ManyToOne(() => Level, (level) => level.tasks, {
      onDelete: 'RESTRICT',
      onUpdate: 'CASCADE',
      eager: true
    })
    @JoinColumn({
      name: 'level_id'
    })
    level: ILevel;
  
    @Column('text', { array: true })
    tags: string[];
  
    @Column('text', { array: true })
    links: string[];
  
    @OneToMany(() => Comment, (comment) => comment.task)
    comments: IComment[];
  
    @ManyToOne(() => User, (user) => user.tasks, {
      onDelete: 'SET NULL',
      onUpdate: 'CASCADE',
      eager: true
    })
    @JoinColumn({name: 'user_id'})
    user: IUser;

    @ManyToOne( _ => TaskType, (taskType) => taskType.tasks, 
    {
      onDelete: 'RESTRICT',
      onUpdate: 'CASCADE',
      eager: true
    }
    )
    @JoinColumn({name: 'task_type_id'})
    taskType: ITaskType
  }
  