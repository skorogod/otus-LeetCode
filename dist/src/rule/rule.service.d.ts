import { CreateRuleDto } from './dto/create-rule.dto';
import { UpdateRuleDto } from './dto/update-rule.dto';
import { RuleRepository } from './rule.repository';
export declare class RuleService {
    private readonly repository;
    constructor(repository: RuleRepository);
    create(createRuleDto: CreateRuleDto): import("src/rule/interfaces/rule.interface").IRule;
    findAll(): import("src/rule/interfaces/rule.interface").IRule[];
    findOne(id: number): import("src/rule/interfaces/rule.interface").IRule;
    update(id: number, updateRuleDto: UpdateRuleDto): import("src/rule/interfaces/rule.interface").IRule;
    remove(id: number): import("src/rule/interfaces/rule.interface").IRule;
}
