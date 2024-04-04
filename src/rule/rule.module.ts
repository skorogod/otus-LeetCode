import { Module } from '@nestjs/common';
import { RuleService } from './rule.service';
import { RuleController } from './rule.controller';
import { RuleRepository } from './rule.repository';

@Module({
  controllers: [RuleController],
  providers: [RuleService, RuleRepository],
  exports: [RuleService, RuleRepository]
})
export class RuleModule {}
