import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateLevelDto } from './dto/create-level.dto';
import { UpdateLevelDto } from './dto/update-level.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Level } from './entities/level.entity';

@Injectable()
export class LevelService {
  constructor(
    @InjectRepository(Level)
    private repository: Repository<Level>
  ){}

  async create(createLevelDto: CreateLevelDto) {
    const level = this.repository.create(createLevelDto);
    return await this.repository.save(level)
  }

  async findAll() {
    return await this.repository.find();
  }

  async findOne(id: number) {
    const level = await this.repository.findOneBy({id});
    if (!level) {
      throw new NotFoundException('Level Not Found')
    }
    return level
  }

  async update(id: number, updateLevelDto: UpdateLevelDto) {
    let level = await this.repository.findOneBy({id})
    if (!level) {
      throw new NotFoundException('Level Not Found')
    }
    level = this.repository.merge(level, updateLevelDto)
    return await this.repository.save(level);
  }

  async remove(id: number) {
    const level = await this.repository.delete(id);
    if (!level.affected) {
      throw new NotFoundException("Level Not Found")
    }
    return level;
  }
}
