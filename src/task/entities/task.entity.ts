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
import { ITask } from '../interfaces/task.interface';
import { IComment } from 'src/comment/interfaces/comment.interface';
import { IUser } from 'src/user/interfaces/user.interface';
import { ITaskType } from 'src/task-type/interfaces/taskType.interface';
import { ILevel } from 'src/level/interfaces/level.interface';
import { Comment } from '../../comment/entities/comment.entity';
import { User } from '../../user/entities/user.entity';
import { Level } from '../../level/entities/level.entity';
import { TaskType } from '../../task-type/entities/task-type.entity';
import { Tag } from '../../tags/entities/tag.entity';
import { ITag } from '../../tags/interfaces/tag.interface';
  
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
  
    @ManyToMany(() => Tag, (tag) => tag.tasks, {
      onDelete: 'SET NULL',
      onUpdate: 'CASCADE',
      eager: true
    })
    tags: ITag[]
  
    @Column('text', { array: true, nullable: true })
    links: string[];
  
    @OneToMany(() => Comment, (comment) => comment.task)
    comments: IComment[];
  
    @ManyToOne(() => User, (user) => user.tasks, {
      onDelete: 'SET NULL',
      onUpdate: 'CASCADE',
    })
    @JoinColumn({name: 'user_id'})
    user: IUser;

    @ManyToMany(() => User, (user) => user.solvedTasks, {
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE',
    })
    solvedUsers: IUser[]

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
  