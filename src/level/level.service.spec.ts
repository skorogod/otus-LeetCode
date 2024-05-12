import { Test, TestingModule } from '@nestjs/testing';
import { LevelService } from './level.service';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Level } from './entities/level.entity';

describe('LevelService', () => {
  let service: LevelService;

  const mockRepository = {
    
  }

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LevelService, 
        {
          provide: getRepositoryToken(Level),
          useValue: mockRepository
        }
      ],
    }).compile();

    service = module.get<LevelService>(LevelService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
