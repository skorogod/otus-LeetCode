import { ITask } from "src/task/interfaces/task.interface";

export class CreateLevelDto {
    title: string;
    tasks: ITask[]
}
