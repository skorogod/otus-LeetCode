import { IRule } from "src/rule/interfaces/rule.interface";
import { MinLength } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";

export class CreateRoleDto {
    @ApiProperty()
    @MinLength(5)
    title: string
    
    @ApiProperty()
    description: string;
    
    @ApiProperty()
    rules: IRule[];
}
