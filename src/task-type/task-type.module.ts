import { Module } from '@nestjs/common';
import { TaskTypeService } from './task-type.service';
import { TaskTypeController } from './task-type.controller';
import { TaskTypeRepository } from './task-type.repository';

@Module({
  controllers: [TaskTypeController],
  providers: [TaskTypeService, TaskTypeRepository],
  exports: [TaskTypeService, TaskTypeRepository]
})
export class TaskTypeModule {}
