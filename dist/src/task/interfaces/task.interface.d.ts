import { ILevel } from "src/level/interfaces/level.interface";
export type ITask = {
    id: number;
    title: string;
    description: string;
    level: ILevel;
    tags: string[];
    links: string[];
};
