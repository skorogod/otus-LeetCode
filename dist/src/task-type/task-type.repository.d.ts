import { ITaskType } from "./interfaces/taskType.interface";
export declare class TaskTypeRepository {
    private taskTypes;
    findAll(): ITaskType[];
    find(id: number): ITaskType | null;
    create(newTaskType: Omit<ITaskType, 'id'>): ITaskType;
    update(id: number, taskType: Partial<ITaskType>): ITaskType | null;
    remove(id: number): ITaskType | null;
}
