import { Test, TestingModule } from '@nestjs/testing';
import { RuleService } from './rule.service';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Rule } from './entities/rule.entity';

describe('RuleService', () => {
  let service: RuleService;

  const mockRepository = {
    
  }

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        RuleService,
        {
          provide: getRepositoryToken(Rule),
          useValue: mockRepository
        }
      ],
    }).compile();

    service = module.get<RuleService>(RuleService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
