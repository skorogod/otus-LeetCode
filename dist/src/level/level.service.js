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
exports.LevelService = void 0;
const common_1 = require("@nestjs/common");
const level_repository_1 = require("./level.repository");
let LevelService = class LevelService {
    constructor(repository) {
        this.repository = repository;
    }
    create(createLevelDto) {
        return this.repository.create(createLevelDto);
    }
    findAll() {
        return this.repository.findAll();
    }
    findOne(id) {
        const level = this.repository.find(id);
        if (!level) {
            throw new common_1.NotFoundException('Level not found');
        }
        return level;
    }
    update(id, updateLevelDto) {
        const level = this.repository.update(id, updateLevelDto);
        if (!level) {
            throw new common_1.NotFoundException('Level not found');
        }
        return level;
    }
    remove(id) {
        const level = this.repository.remove(id);
        if (!level) {
            throw new common_1.NotFoundException('Level not found');
        }
        return level;
    }
};
exports.LevelService = LevelService;
exports.LevelService = LevelService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [level_repository_1.LevelRepository])
], LevelService);
//# sourceMappingURL=level.service.js.map