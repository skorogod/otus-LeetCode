import { ITask } from "./interfaces/task.interface";
export declare class TaskRepository {
    tasks: ITask[];
    findAll(): ITask[];
    find(id: number): ITask | null;
    create(newTask: Omit<ITask, 'id'>): ITask;
    update(id: number, task: Partial<ITask>): ITask | null;
    remove(id: number): ITask | null;
}
