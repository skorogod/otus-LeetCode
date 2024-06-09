import { ILevel } from "src/level/interfaces/level.interface";
import { ITaskType } from "src/task-type/interfaces/taskType.interface";

export type ITask = {
    id: number;
    title: string;
    description: string;
    level: ILevel;
    tags: string[];
    links: string[];
    taskType: ITaskType;
  };