import {
    Column,
    Entity,
    PrimaryGeneratedColumn,
    OneToMany,
    ManyToMany,
    JoinTable,
  } from 'typeorm';
  import { ITask } from 'src/task/interfaces/task.interface';
  import { ILevel } from '../interfaces/level.interface';
  import { Task } from '../../task/entities/task.entity';
  
  @Entity({ name: 'levels' })
  export class Level implements ILevel {
    @PrimaryGeneratedColumn()
    id: number;
  
    @Column()
    title: string;
  
    @OneToMany(() => Task, (task) => task.level)
    tasks: ITask[];
  }
  