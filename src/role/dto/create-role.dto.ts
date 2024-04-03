import { IRule } from "src/rule/interfaces/rule.interface";
import { MinLength } from "class-validator";

export class CreateRoleDto {
    @MinLength(5)
    title: string
    
    description: string;
    
    rules: IRule[];
}
