import { ITask } from "src/task/interfaces/task.interface";

export type ILevel = {
    id: number;
    title: string;
    tasks: ITask[]
  };