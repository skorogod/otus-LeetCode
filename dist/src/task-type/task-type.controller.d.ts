import { TaskTypeService } from './task-type.service';
import { CreateTaskTypeDto } from './dto/create-task-type.dto';
import { UpdateTaskTypeDto } from './dto/update-task-type.dto';
export declare class TaskTypeController {
    private readonly taskTypeService;
    constructor(taskTypeService: TaskTypeService);
    create(createTaskTypeDto: CreateTaskTypeDto): import("src/task-type/interfaces/taskType.interface").ITaskType;
    findAll(): import("src/task-type/interfaces/taskType.interface").ITaskType[];
    findOne(id: string): import("src/task-type/interfaces/taskType.interface").ITaskType;
    update(id: string, updateTaskTypeDto: UpdateTaskTypeDto): import("src/task-type/interfaces/taskType.interface").ITaskType;
    remove(id: string): import("src/task-type/interfaces/taskType.interface").ITaskType;
}
