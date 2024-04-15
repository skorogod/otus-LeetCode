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
exports.Task = void 0;
const typeorm_1 = require("typeorm");
const comment_entity_1 = require("../../comment/entities/comment.entity");
const user_entity_1 = require("../../user/entities/user.entity");
const level_entity_1 = require("../../level/entities/level.entity");
const task_type_entity_1 = require("../../task-type/entities/task-type.entity");
let Task = class Task {
};
exports.Task = Task;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Task.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Task.prototype, "title", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Task.prototype, "description", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => level_entity_1.Level, (level) => level.tasks),
    __metadata("design:type", Object)
], Task.prototype, "level", void 0);
__decorate([
    (0, typeorm_1.Column)('text', { array: true }),
    __metadata("design:type", Array)
], Task.prototype, "tags", void 0);
__decorate([
    (0, typeorm_1.Column)('text', { array: true }),
    __metadata("design:type", Array)
], Task.prototype, "links", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => comment_entity_1.Comment, (comment) => comment.task),
    __metadata("design:type", Array)
], Task.prototype, "comments", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => user_entity_1.User, (user) => user.tasks),
    __metadata("design:type", Object)
], Task.prototype, "user", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(_ => task_type_entity_1.TaskType, (taskType => taskType.tasks)),
    __metadata("design:type", Object)
], Task.prototype, "taskType", void 0);
exports.Task = Task = __decorate([
    (0, typeorm_1.Entity)({ name: 'tasks' })
], Task);
//# sourceMappingURL=task.entity.js.map