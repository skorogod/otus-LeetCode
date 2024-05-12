import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Task } from './entities/task.entity';

@Injectable()
export class TaskService {
  constructor(
    @InjectRepository(Task)
    private repository: Repository<Task>
  ){}

  async create(createTaskDto: CreateTaskDto) {
    const task = this.repository.create(createTaskDto);
    return await this.repository.save(task)
  }

  async findAll() {
    return await this.repository.find();
  }

  async findOne(id: number) {
    const task = await this.repository.findOneBy({id});
    if (!task) {
      throw new NotFoundException('Task Not Found')
    }
    return task
  }

  async update(id: number, updateTaskDto: UpdateTaskDto) {
    let task = await this.repository.findOneBy({id})
    if (!task) {
      throw new NotFoundException('Task Not Found')
    }
    task = this.repository.merge(task, updateTaskDto)
    return await this.repository.save(task);
  }

  async remove(id: number) {
    const task = await this.repository.delete(id);
    if (!task.affected) {
      throw new NotFoundException("Task Not Found")
    }
    return task;
  }
}
