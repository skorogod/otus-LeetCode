import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { TaskRepository } from './task.repository';
export declare class TaskService {
    private readonly repository;
    constructor(repository: TaskRepository);
    create(createTaskDto: CreateTaskDto): import("src/task/interfaces/task.interface").ITask;
    findAll(): import("src/task/interfaces/task.interface").ITask[];
    findOne(id: number): import("src/task/interfaces/task.interface").ITask;
    update(id: number, updateTaskDto: UpdateTaskDto): import("src/task/interfaces/task.interface").ITask;
    remove(id: number): import("src/task/interfaces/task.interface").ITask;
}
