import { Test, TestingModule } from '@nestjs/testing';
import { LevelService } from './level.service';
import { LevelRepository } from './level.repository';

describe('LevelService', () => {
  let service: LevelService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LevelService, LevelRepository],
    }).compile();

    service = module.get<LevelService>(LevelService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
