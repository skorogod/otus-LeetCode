import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsStrongPassword, MinLength } from "class-validator";
import { IRole } from "src/role/interfaces/role.interface";

export class CreateUserDto {
    @ApiProperty()
    @IsEmail()
    email: string;

    @ApiProperty()
    @IsStrongPassword()
    password: string;

    @ApiProperty()
    @MinLength(5)
    username: string;
    role: IRole;
}
