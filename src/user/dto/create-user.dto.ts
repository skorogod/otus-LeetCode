import { IsEmail, IsStrongPassword, MinLength } from "class-validator";
import { IRole } from "src/role/interfaces/role.interface";

export class CreateUserDto {
    @IsEmail()
    email: string;
    @IsStrongPassword()
    password: string;
    @MinLength(5)
    username: string;
    role: IRole;
}
