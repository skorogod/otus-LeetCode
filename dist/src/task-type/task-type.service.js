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
exports.TaskTypeService = void 0;
const common_1 = require("@nestjs/common");
const task_type_repository_1 = require("./task-type.repository");
let TaskTypeService = class TaskTypeService {
    constructor(repository) {
        this.repository = repository;
    }
    create(createTaskTypeDto) {
        return this.repository.create(createTaskTypeDto);
    }
    findAll() {
        return this.repository.findAll();
    }
    findOne(id) {
        const taskType = this.repository.find(id);
        if (!taskType) {
            throw new common_1.NotFoundException('TaskType not found');
        }
        return taskType;
    }
    update(id, updateTaskTypeDto) {
        const taskType = this.repository.update(id, updateTaskTypeDto);
        if (!taskType) {
            throw new common_1.NotFoundException('TaskType not found');
        }
        return taskType;
    }
    remove(id) {
        const taskType = this.repository.remove(id);
        if (!taskType) {
            throw new common_1.NotFoundException('TaskType not found');
        }
        return taskType;
    }
};
exports.TaskTypeService = TaskTypeService;
exports.TaskTypeService = TaskTypeService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [task_type_repository_1.TaskTypeRepository])
], TaskTypeService);
//# sourceMappingURL=task-type.service.js.map