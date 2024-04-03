import { ITask } from 'src/task/interfaces/task.interface';
import { IComment } from '../interfaces/comment.interface';
import { IUser } from 'src/user/interfaces/user.interface';
export declare class Comment implements IComment {
    id: number;
    date: Date;
    text: string;
    task: ITask;
    user: IUser;
}
