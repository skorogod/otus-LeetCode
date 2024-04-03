import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { TaskRepository } from './task.repository';

@Injectable()
export class TaskService {
  constructor(private readonly repository: TaskRepository) { 
  }
  create(createTaskDto: CreateTaskDto) {
    return this.repository.create(createTaskDto)
  }

  findAll() {
    return this.repository.findAll()
  }

  findOne(id: number) {
    const task = this.repository.find(id)
    if(!task) {
      throw new NotFoundException('Task not found')
    }
    return task;
  }

  update(id: number, updateTaskDto: UpdateTaskDto) {
    return this.repository.update(id, updateTaskDto)
  }

  remove(id: number) {
   const task = this.repository.remove(id)
   if (!task) {
    throw new NotFoundException('Task not found')
   }
   return task
  }
}
