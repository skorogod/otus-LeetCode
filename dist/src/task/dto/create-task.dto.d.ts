import { ILevel } from "src/level/interfaces/level.interface";
export declare class CreateTaskDto {
    title: string;
    description: string;
    level: ILevel;
    tags: string[];
    links: string[];
}
