import { IRole } from "src/role/interfaces/role.interface";

export type IUser = {
    id: number;
    email: string;
    password: string;
    username: string;
    role: IRole;
  };