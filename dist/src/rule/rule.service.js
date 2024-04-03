"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RuleService = void 0;
const common_1 = require("@nestjs/common");
const rule_repository_1 = require("./rule.repository");
let RuleService = class RuleService {
    constructor(repository) {
        this.repository = repository;
    }
    create(createRuleDto) {
        return this.repository.create(createRuleDto);
    }
    findAll() {
        return this.repository.findAll();
    }
    findOne(id) {
        const rule = this.repository.find(id);
        if (!rule) {
            throw new common_1.NotFoundException('Rule not found');
        }
        return rule;
    }
    update(id, updateRuleDto) {
        return this.repository.update(id, updateRuleDto);
    }
    remove(id) {
        const rule = this.repository.remove(id);
        if (!rule) {
            throw new common_1.NotFoundException('Rule not found');
        }
        return rule;
    }
};
exports.RuleService = RuleService;
exports.RuleService = RuleService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [rule_repository_1.RuleRepository])
], RuleService);
//# sourceMappingURL=rule.service.js.map