import { ITask } from 'src/task/interfaces/task.interface';
import { ILevel } from '../interfaces/level.interface';
export declare class Level implements ILevel {
    id: number;
    title: string;
    tasks: ITask[];
}
