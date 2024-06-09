import { Test, TestingModule } from '@nestjs/testing';
import { TaskTypeService } from './task-type.service';
import { getRepositoryToken } from '@nestjs/typeorm';
import { TaskType } from './entities/task-type.entity';

describe('TaskTypeService', () => {
  let service: TaskTypeService;

  const mockRepository = {

  }
  
  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        TaskTypeService,
        {
          provide: getRepositoryToken(TaskType),
          useValue: mockRepository
        }
      ],
    }).compile();

    service = module.get<TaskTypeService>(TaskTypeService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
