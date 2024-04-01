import { Column, Entity, PrimaryGeneratedColumn, ManyToOne} from "typeorm";
import { ITask, IComment, IUser} from "../../types";
import { Task } from "./task.entity";
import { User } from "./user.entity";


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