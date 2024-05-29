import { IRole } from "src/role/interfaces/role.interface";
import { ITask } from "src/task/interfaces/task.interface";

export type IUser = {
    id: number;
    email: string;
    image: string,
    password: string;
    username: string;
    role: IRole;
    views: number;
    solvedTasks: ITask[];
    discuss: number;
    reputation :number;
  };