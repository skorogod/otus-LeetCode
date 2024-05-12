import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateRuleDto } from './dto/create-rule.dto';
import { UpdateRuleDto } from './dto/update-rule.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Rule } from './entities/rule.entity';

@Injectable()
export class RuleService {
  constructor(
    @InjectRepository(Rule)
    private repository: Repository<Rule>
  ){}

  async create(createRuleDto: CreateRuleDto) {
    const rule = this.repository.create(createRuleDto);
    return await this.repository.save(rule)
  }

  async findAll() {
    return await this.repository.find();
  }

  async findOne(id: number) {
    const rule = await this.repository.findOneBy({id});
    if (!rule) {
      throw new NotFoundException('Rule Not Found')
    }
    return rule
  }

  async update(id: number, updateRuleDto: UpdateRuleDto) {
    let rule = await this.repository.findOneBy({id})
    if (!rule) {
      throw new NotFoundException('Rule Not Found')
    }
    rule = this.repository.merge(rule, updateRuleDto)
    return await this.repository.save(rule);
  }

  async remove(id: number) {
    const rule = await this.repository.delete(id);
    if (!rule.affected) {
      throw new NotFoundException("Rule Not Found")
    }
    return rule;
  }
}
