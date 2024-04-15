import { Column, Entity, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { ITask } from 'src/task/interfaces/task.interface';
import { IComment } from '../interfaces/comment.interface';
import { IUser } from 'src/user/interfaces/user.interface';
import { User } from '../../user/entities/user.entity';
import { Task } from '../../task/entities/task.entity';

@Entity({ name: 'comments' })
export class Comment implements IComment {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  date: Date;

  @Column()
  text: string;

  @ManyToOne(() => Task, (task) => task.comments)
  task: ITask;
  
  @ManyToOne(() => User, (user) => user.comments)
  user: IUser;
}
