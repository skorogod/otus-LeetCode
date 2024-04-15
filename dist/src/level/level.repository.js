"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LevelRepository = void 0;
const common_1 = require("@nestjs/common");
let LevelRepository = class LevelRepository {
    constructor() {
        this.levels = [
            {
                id: 0,
                title: 'Легкий',
                tasks: []
            },
        ];
    }
    findAll() {
        return this.levels;
    }
    ;
    find(id) {
        return this.levels.find((r) => r.id === id);
    }
    ;
    create(newLevel) {
        this.levels.push({
            ...newLevel,
            id: this.levels.length
        });
        console.log("LEVELS ", this.levels);
        return this.levels.at(-1);
    }
    ;
    update(id, level) {
        const index = this.levels.findIndex(r => r.id === id);
        if (index === -1) {
            return null;
        }
        this.levels[index] = {
            ...this.levels[index],
            ...level,
            id
        };
        return this.levels[index];
    }
    ;
    remove(id) {
        const index = this.levels.findIndex(el => el.id === id);
        if (index === -1) {
            return null;
        }
        const level = this.levels[index];
        this.levels = this.levels.filter(r => r.id !== id);
        return level;
    }
};
exports.LevelRepository = LevelRepository;
exports.LevelRepository = LevelRepository = __decorate([
    (0, common_1.Injectable)()
], LevelRepository);
//# sourceMappingURL=level.repository.js.map