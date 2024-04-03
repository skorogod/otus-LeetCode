import { RuleService } from './rule.service';
import { CreateRuleDto } from './dto/create-rule.dto';
import { UpdateRuleDto } from './dto/update-rule.dto';
export declare class RuleController {
    private readonly ruleService;
    constructor(ruleService: RuleService);
    create(createRuleDto: CreateRuleDto): import("src/rule/interfaces/rule.interface").IRule;
    findAll(): import("src/rule/interfaces/rule.interface").IRule[];
    findOne(id: string): import("src/rule/interfaces/rule.interface").IRule;
    update(id: string, updateRuleDto: UpdateRuleDto): import("src/rule/interfaces/rule.interface").IRule;
    remove(id: string): import("src/rule/interfaces/rule.interface").IRule;
}
