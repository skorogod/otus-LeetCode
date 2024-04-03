"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RuleRepository = void 0;
const common_1 = require("@nestjs/common");
let RuleRepository = class RuleRepository {
    constructor() {
        this.rules = [
            {
                id: 0,
                title: 'Просмотр задач',
                description: 'Пользователь может просматривать информацию о задачах',
            },
            {
                id: 1,
                title: 'Выполнение задач',
                description: 'Пользователь может выполнять задачи',
            },
        ];
    }
    findAll() {
        return this.rules;
    }
    ;
    find(id) {
        return this.rules.find((r) => r.id === id);
    }
    ;
    create(newRule) {
        this.rules.push({
            ...newRule,
            id: this.rules.length
        });
        return this.rules.at(-1);
    }
    ;
    update(id, rule) {
        const index = this.rules.findIndex(r => r.id === id);
        if (index === -1) {
            return null;
        }
        this.rules[index] = {
            ...this.rules[index],
            ...rule,
            id
        };
        return this.rules[index];
    }
    ;
    remove(id) {
        const index = this.rules.findIndex(el => el.id === id);
        if (index === -1) {
            return null;
        }
        const rule = this.rules[index];
        this.rules = this.rules.filter(r => r.id !== id);
        return rule;
    }
};
exports.RuleRepository = RuleRepository;
exports.RuleRepository = RuleRepository = __decorate([
    (0, common_1.Injectable)()
], RuleRepository);
//# sourceMappingURL=rule.repository.js.map