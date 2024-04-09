"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LevelModule = void 0;
const common_1 = require("@nestjs/common");
const level_service_1 = require("./level.service");
const level_controller_1 = require("./level.controller");
const typeorm_1 = require("@nestjs/typeorm");
const level_entity_1 = require("./entities/level.entity");
let LevelModule = class LevelModule {
};
exports.LevelModule = LevelModule;
exports.LevelModule = LevelModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([level_entity_1.Level])],
        controllers: [level_controller_1.LevelController],
        providers: [level_service_1.LevelService],
        exports: [level_service_1.LevelService]
    })
], LevelModule);
//# sourceMappingURL=level.module.js.map