import { ILevel } from "src/level/interfaces/level.interface";
import { ITag } from "src/tags/interfaces/tag.interface";
import { ITaskType } from "src/task-type/interfaces/taskType.interface";

export type ITask = {
    id: number;
    title: string;
    description: string;
    level: ILevel;
    tags: ITag[];
    links: string[];
    taskType: ITaskType;
  };