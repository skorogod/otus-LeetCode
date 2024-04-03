import { ITask } from '../interfaces/task.interface';
import { IComment } from 'src/comment/interfaces/comment.interface';
import { IUser } from 'src/user/interfaces/user.interface';
import { ITaskType } from 'src/task-type/interfaces/taskType.interface';
import { ILevel } from 'src/level/interfaces/level.interface';
export declare class Task implements ITask {
    id: number;
    title: string;
    description: string;
    level: ILevel;
    tags: string[];
    links: string[];
    comments: IComment[];
    user: IUser;
    taskType: ITaskType;
}
