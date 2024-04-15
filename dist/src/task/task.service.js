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
exports.TaskService = void 0;
const common_1 = require("@nestjs/common");
const task_repository_1 = require("./task.repository");
let TaskService = class TaskService {
    constructor(repository) {
        this.repository = repository;
    }
    create(createTaskDto) {
        return this.repository.create(createTaskDto);
    }
    findAll() {
        return this.repository.findAll();
    }
    findOne(id) {
        const task = this.repository.find(id);
        if (!task) {
            throw new common_1.NotFoundException('Task not found');
        }
        return task;
    }
    update(id, updateTaskDto) {
        const task = this.repository.update(id, updateTaskDto);
        if (!task) {
            throw new common_1.NotFoundException('Task not found');
        }
        return task;
    }
    remove(id) {
        const task = this.repository.remove(id);
        if (!task) {
            throw new common_1.NotFoundException('Task not found');
        }
        return task;
    }
};
exports.TaskService = TaskService;
exports.TaskService = TaskService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [task_repository_1.TaskRepository])
], TaskService);
//# sourceMappingURL=task.service.js.map