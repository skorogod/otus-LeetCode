import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserRepository } from './user.repository';

@Injectable()
export class UserService {
  constructor(private readonly repository: UserRepository) { 
  }
  create(createUserDto: CreateUserDto) {
    return this.repository.create(createUserDto)
  }

  findAll() {
    return this.repository.findAll()
  }

  findOne(id: number) {
    const user = this.repository.find(id)
    if(!user) {
      throw new NotFoundException('User not found')
    }
    return user;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    const user = this.repository.update(id, updateUserDto)
    if(!user) {
      throw new NotFoundException('User not found')
    }
    return user;
  }

  remove(id: number) {
   const user = this.repository.remove(id)
   if (!user) {
    throw new NotFoundException('User not found')
   }
   return user
  }
}
