import { MinLength } from "class-validator";
import { ILevel } from "src/level/interfaces/level.interface";

export class CreateTaskDto {
    @MinLength(5)
    title: string;
    description: string;
    level: ILevel;
    tags: string[];
    links: string[];
}
