"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskTypeRepository = void 0;
const common_1 = require("@nestjs/common");
let TaskTypeRepository = class TaskTypeRepository {
    constructor() {
        this.taskTypes = [
            {
                id: 0,
                title: 'Сортировка массива'
            }
        ];
    }
    findAll() {
        return this.taskTypes;
    }
    ;
    find(id) {
        return this.taskTypes.find((r) => r.id === id);
    }
    ;
    create(newTaskType) {
        this.taskTypes.push({
            ...newTaskType,
            id: this.taskTypes.length
        });
        return this.taskTypes.at(-1);
    }
    ;
    update(id, taskType) {
        const index = this.taskTypes.findIndex(r => r.id === id);
        if (index === -1) {
            return null;
        }
        this.taskTypes[index] = {
            ...this.taskTypes[index],
            ...taskType,
            id
        };
        return this.taskTypes[index];
    }
    ;
    remove(id) {
        const index = this.taskTypes.findIndex(el => el.id === id);
        if (index === -1) {
            return null;
        }
        const taskType = this.taskTypes[index];
        this.taskTypes = this.taskTypes.filter(r => r.id !== id);
        return taskType;
    }
};
exports.TaskTypeRepository = TaskTypeRepository;
exports.TaskTypeRepository = TaskTypeRepository = __decorate([
    (0, common_1.Injectable)()
], TaskTypeRepository);
//# sourceMappingURL=task-type.repository.js.map