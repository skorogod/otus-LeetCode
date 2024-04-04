import { Test, TestingModule } from '@nestjs/testing';
import { RuleService } from './rule.service';
import { RuleRepository } from './rule.repository';

describe('RuleService', () => {
  let service: RuleService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RuleService, RuleRepository],
    }).compile();

    service = module.get<RuleService>(RuleService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
