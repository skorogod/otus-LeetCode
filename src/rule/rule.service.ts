import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateRuleDto } from './dto/create-rule.dto';
import { UpdateRuleDto } from './dto/update-rule.dto';
import { RuleRepository } from './rule.repository';

@Injectable()
export class RuleService {
  constructor(private readonly repository: RuleRepository) { 
  }
  create(createRuleDto: CreateRuleDto) {
    return this.repository.create(createRuleDto)
  }

  findAll() {
    return this.repository.findAll()
  }

  findOne(id: number) {
    const rule = this.repository.find(id)
    if(!rule) {
      throw new NotFoundException('Rule not found')
    }
    return rule;
  }

  update(id: number, updateRuleDto: UpdateRuleDto) {
    const rule = this.repository.update(id, updateRuleDto)
    if(!rule) {
      throw new NotFoundException('Rule not found')
    }
    return rule;
  }

  remove(id: number) {
   const rule = this.repository.remove(id)
   if (!rule) {
    throw new NotFoundException('Rule not found')
   }
   return rule
  }
}
