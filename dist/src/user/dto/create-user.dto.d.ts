import { IRole } from "src/role/interfaces/role.interface";
export declare class CreateUserDto {
    email: string;
    password: string;
    username: string;
    role: IRole;
}
