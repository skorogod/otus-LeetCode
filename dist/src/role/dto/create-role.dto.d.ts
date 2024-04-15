import { IRule } from "src/rule/interfaces/rule.interface";
export declare class CreateRoleDto {
    title: string;
    description: string;
    rules: IRule[];
}
