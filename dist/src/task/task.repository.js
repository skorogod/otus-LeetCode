"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskRepository = void 0;
const common_1 = require("@nestjs/common");
let TaskRepository = class TaskRepository {
    constructor() {
        this.tasks = [
            {
                id: 0,
                title: 'Сортировка массива',
                description: 'Отсортируйте массив [2,4,1,6]',
                level: { id: 0, title: 'light', tasks: [] },
                tags: ['Массив', 'сортировка'],
                links: ['testlink.com'],
            },
        ];
    }
    findAll() {
        return this.tasks;
    }
    ;
    find(id) {
        return this.tasks.find((r) => r.id === id);
    }
    ;
    create(newTask) {
        this.tasks.push({
            ...newTask,
            id: this.tasks.length
        });
        return this.tasks.at(-1);
    }
    ;
    update(id, task) {
        const index = this.tasks.findIndex(r => r.id === id);
        if (index === -1) {
            return null;
        }
        this.tasks[index] = {
            ...this.tasks[index],
            ...task,
            id
        };
        return this.tasks[index];
    }
    ;
    remove(id) {
        const index = this.tasks.findIndex(el => el.id === id);
        if (index === -1) {
            return null;
        }
        const task = this.tasks[index];
        this.tasks = this.tasks.filter(r => r.id !== id);
        return task;
    }
};
exports.TaskRepository = TaskRepository;
exports.TaskRepository = TaskRepository = __decorate([
    (0, common_1.Injectable)()
], TaskRepository);
//# sourceMappingURL=task.repository.js.map