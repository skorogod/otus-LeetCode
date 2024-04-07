import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateTaskTypeDto } from './dto/create-task-type.dto';
import { UpdateTaskTypeDto } from './dto/update-task-type.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { TaskType } from './entities/task-type.entity';

@Injectable()
export class TaskTypeService {
  constructor(
    @InjectRepository(TaskType)
    private repository: Repository<TaskType>
  ){}

  async create(createTaskTypeDto: CreateTaskTypeDto) {
    const taskType = this.repository.create(createTaskTypeDto);
    return await this.repository.save(taskType)
  }

  async findAll() {
    return await this.repository.find();
  }

  async findOne(id: number) {
    const taskType = await this.repository.findOneBy({id});
    if (!taskType) {
      throw new NotFoundException('TaskType Not Found')
    }
    return taskType
  }

  async update(id: number, updateTaskTypeDto: UpdateTaskTypeDto) {
    let taskType = await this.repository.findOneBy({id})
    if (!taskType) {
      throw new NotFoundException('TaskType Not Found')
    }
    taskType = this.repository.merge(taskType, updateTaskTypeDto)
    return await this.repository.save(taskType);
  }

  async remove(id: number) {
    const taskType = await this.repository.delete(id);
    if (!taskType.affected) {
      throw new NotFoundException("TaskType Not Found")
    }
    return taskType;
  }
}
