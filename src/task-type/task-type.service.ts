import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateTaskTypeDto } from './dto/create-task-type.dto';
import { UpdateTaskTypeDto } from './dto/update-task-type.dto';
import { TaskTypeRepository } from './task-type.repository';

@Injectable()
export class TaskTypeService {
  constructor(private readonly repository: TaskTypeRepository) { 
  }
  create(createTaskTypeDto: CreateTaskTypeDto) {
    return this.repository.create(createTaskTypeDto)
  }

  findAll() {
    return this.repository.findAll()
  }

  findOne(id: number) {
    const taskType = this.repository.find(id)
    if(!taskType) {
      throw new NotFoundException('TaskType not found')
    }
    return taskType;
  }

  update(id: number, updateTaskTypeDto: UpdateTaskTypeDto) {
    const taskType = this.repository.update(id, updateTaskTypeDto)
    if(!taskType) {
      throw new NotFoundException('TaskType not found')
    }
    return taskType;
  }

  remove(id: number) {
   const taskType = this.repository.remove(id)
   if (!taskType) {
    throw new NotFoundException('TaskType not found')
   }
   return taskType
  }
}
