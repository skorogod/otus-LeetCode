import { IUser } from "src/user/interfaces/user.interface";
import { ITask } from "src/task/interfaces/task.interface";

export type IComment = {
    id: number;
    date: Date | string;
    text: string;
    task: ITask;
    user: IUser;
  };