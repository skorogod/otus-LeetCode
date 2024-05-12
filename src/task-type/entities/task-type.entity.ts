import { Task } from "../../task/entities/task.entity";
import { ITask } from "src/task/interfaces/task.interface";
import { ITaskType } from "../interfaces/taskType.interface";
import { PrimaryGeneratedColumn, OneToMany, Entity } from "typeorm";

@Entity({name: 'task_types'})
export class TaskType implements ITaskType {
    @PrimaryGeneratedColumn()
    id: number;

    title: string;

    @OneToMany( _ => Task, (task) => task.taskType)
    tasks: ITask[]
}