import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateLevelDto } from './dto/create-level.dto';
import { UpdateLevelDto } from './dto/update-level.dto';
import { LevelRepository } from './level.repository';

@Injectable()
export class LevelService {
  constructor(private readonly repository: LevelRepository) { 
  }
  create(createLevelDto: CreateLevelDto) {
    return this.repository.create(createLevelDto)
  }

  findAll() {
    return this.repository.findAll()
  }

  findOne(id: number) {
    const level = this.repository.find(id)
    if(!level) {
      throw new NotFoundException('Level not found')
    }
    return level;
  }

  update(id: number, updateLevelDto: UpdateLevelDto) {
    const level = this.repository.update(id, updateLevelDto)
    if(!level) {
      throw new NotFoundException('Level not found')
    }
    return level;
  }

  remove(id: number) {
   const level = this.repository.remove(id)
   if (!level) {
    throw new NotFoundException('Level not found')
   }
   return level
  }
}
