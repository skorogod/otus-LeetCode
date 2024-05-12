import { ApiProperty } from "@nestjs/swagger";
import { ITask } from "src/task/interfaces/task.interface";

export class CreateLevelDto {
    @ApiProperty()
    title: string;

    @ApiProperty()
    tasks: ITask[]
}
