"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskTypeModule = void 0;
const common_1 = require("@nestjs/common");
const task_type_service_1 = require("./task-type.service");
const task_type_controller_1 = require("./task-type.controller");
const task_type_repository_1 = require("./task-type.repository");
let TaskTypeModule = class TaskTypeModule {
};
exports.TaskTypeModule = TaskTypeModule;
exports.TaskTypeModule = TaskTypeModule = __decorate([
    (0, common_1.Module)({
        controllers: [task_type_controller_1.TaskTypeController],
        providers: [task_type_service_1.TaskTypeService, task_type_repository_1.TaskTypeRepository],
        exports: [task_type_service_1.TaskTypeService, task_type_repository_1.TaskTypeRepository]
    })
], TaskTypeModule);
//# sourceMappingURL=task-type.module.js.map