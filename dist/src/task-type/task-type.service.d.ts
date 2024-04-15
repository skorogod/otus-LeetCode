import { CreateTaskTypeDto } from './dto/create-task-type.dto';
import { UpdateTaskTypeDto } from './dto/update-task-type.dto';
import { TaskTypeRepository } from './task-type.repository';
export declare class TaskTypeService {
    private readonly repository;
    constructor(repository: TaskTypeRepository);
    create(createTaskTypeDto: CreateTaskTypeDto): import("src/task-type/interfaces/taskType.interface").ITaskType;
    findAll(): import("src/task-type/interfaces/taskType.interface").ITaskType[];
    findOne(id: number): import("src/task-type/interfaces/taskType.interface").ITaskType;
    update(id: number, updateTaskTypeDto: UpdateTaskTypeDto): import("src/task-type/interfaces/taskType.interface").ITaskType;
    remove(id: number): import("src/task-type/interfaces/taskType.interface").ITaskType;
}
