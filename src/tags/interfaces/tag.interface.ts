import type { ITask } from "src/task/interfaces/task.interface";

export interface ITag {
    id: number,
    title: string,
    tasks: ITask[],
}