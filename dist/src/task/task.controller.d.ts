import { TaskService } from './task.service';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
export declare class TaskController {
    private readonly taskService;
    constructor(taskService: TaskService);
    create(createTaskDto: CreateTaskDto): import("src/task/interfaces/task.interface").ITask;
    findAll(): import("src/task/interfaces/task.interface").ITask[];
    findOne(id: string): import("src/task/interfaces/task.interface").ITask;
    update(id: string, updateTaskDto: UpdateTaskDto): import("src/task/interfaces/task.interface").ITask;
    remove(id: string): import("src/task/interfaces/task.interface").ITask;
}
