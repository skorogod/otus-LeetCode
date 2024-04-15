import { ITask } from "src/task/interfaces/task.interface";
import { ITaskType } from "../interfaces/taskType.interface";
export declare class TaskType implements ITaskType {
    id: number;
    title: string;
    tasks: ITask[];
}
