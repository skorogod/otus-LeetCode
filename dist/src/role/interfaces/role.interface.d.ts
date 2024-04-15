import { IRule } from "src/rule/interfaces/rule.interface";
export type IRole = {
    id: number;
    title: string;
    description: string;
    rules: IRule[];
};
