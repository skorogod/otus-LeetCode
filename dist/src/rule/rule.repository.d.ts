import { IRule } from "./interfaces/rule.interface";
export declare class RuleRepository {
    private rules;
    findAll(): IRule[];
    find(id: number): IRule | null;
    create(newRule: Omit<IRule, 'id'>): IRule;
    update(id: number, rule: Partial<IRule>): IRule | null;
    remove(id: number): IRule | null;
}
