import { ApiProperty } from "@nestjs/swagger";
import { MinLength } from "class-validator";
import { ILevel } from "src/level/interfaces/level.interface";
import { ITag } from "src/tags/interfaces/tag.interface";

export class CreateTaskDto {
    @ApiProperty()
    @MinLength(5)
    title: string;

    @ApiProperty()
    description: string;

    @ApiProperty()
    level: ILevel;

    @ApiProperty()
    tags: ITag[];

    @ApiProperty()
    links: string[];
}
