"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RuleModule = void 0;
const common_1 = require("@nestjs/common");
const rule_service_1 = require("./rule.service");
const rule_controller_1 = require("./rule.controller");
const typeorm_1 = require("@nestjs/typeorm");
const rule_entity_1 = require("./entities/rule.entity");
let RuleModule = class RuleModule {
};
exports.RuleModule = RuleModule;
exports.RuleModule = RuleModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([rule_entity_1.Rule])],
        controllers: [rule_controller_1.RuleController],
        providers: [rule_service_1.RuleService],
        exports: [rule_service_1.RuleService]
    })
], RuleModule);
//# sourceMappingURL=rule.module.js.map