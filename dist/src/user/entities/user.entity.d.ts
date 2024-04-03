import { IUser } from '../interfaces/user.interface';
import { IRole } from 'src/role/interfaces/role.interface';
import { ITask } from 'src/task/interfaces/task.interface';
import { Comment } from 'src/comment/entities/comment.entity';
export declare class User implements IUser {
    id: number;
    email: string;
    password: string;
    username: string;
    role: IRole;
    comments: Comment[];
    tasks: ITask[];
}
