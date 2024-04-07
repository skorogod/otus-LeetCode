import { Test, TestingModule } from '@nestjs/testing';
import { TaskTypeService } from './task-type.service';
import { TaskTypeRepository } from './task-type.repository';

describe('TaskTypeService', () => {
  let service: TaskTypeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TaskTypeService, TaskTypeRepository],
    }).compile();

    service = module.get<TaskTypeService>(TaskTypeService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
