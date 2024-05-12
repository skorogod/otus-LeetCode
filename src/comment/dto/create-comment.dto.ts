import { ApiProperty } from "@nestjs/swagger";
import { ITask } from "src/task/interfaces/task.interface";
import { IUser } from "src/user/interfaces/user.interface";

export class CreateCommentDto {
    @ApiProperty()
    date: Date;

    @ApiProperty()
    text: string;

    @ApiProperty()
    task: ITask;

    @ApiProperty()
    user: IUser;
}
