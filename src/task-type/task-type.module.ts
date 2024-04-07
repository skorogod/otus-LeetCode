import { Module } from '@nestjs/common';
import { TaskTypeService } from './task-type.service';
import { TaskTypeController } from './task-type.controller';
import { TaskTypeRepository } from './task-type.repository';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TaskType } from './entities/task-type.entity';

@Module({
  imports: [TypeOrmModule.forFeature([TaskType])],
  controllers: [TaskTypeController],
  providers: [TaskTypeService, TaskTypeRepository],
  exports: [TaskTypeService, TaskTypeRepository]
})
export class TaskTypeModule {}
