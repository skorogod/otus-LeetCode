import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import * as argon2 from 'argon2';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private repository: Repository<User>
  ){}

  async create(createUserDto: CreateUserDto) {
    const emailExists = await this.repository.findOne({
      where: {
        email: createUserDto.email
      }}
    )

    const usernameExists = await this.repository.findOne({
      where: {
        username: createUserDto.username
      }}
    )

    if (emailExists) {
      throw new BadRequestException('This Email already exists')
    }
    else if (usernameExists) {
      throw new BadRequestException('This Username already exists')
    }

    const user = this.repository.create({
      email: createUserDto.email,
      username: createUserDto.username,
      password: await argon2.hash(createUserDto.password)
    });
    
    return await this.repository.save(user)
  }

  async findAll() {
    return await this.repository.find();
  }

  async findOne(id: number) {
    const user = await this.repository.findOneBy({id});
    if (!user) {
      throw new NotFoundException('User Not Found')
    }
    return user
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    let user = await this.repository.findOneBy({id})
    if (!user) {
      throw new NotFoundException('User Not Found')
    }
    user = this.repository.merge(user, updateUserDto)
    return await this.repository.save(user);
  }

  async remove(id: number) {
    const user = await this.repository.delete(id);
    if (!user.affected) {
      throw new NotFoundException("User Not Found")
    }
    return user;
  }
}
