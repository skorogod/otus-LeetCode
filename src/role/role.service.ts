import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateRoleDto } from './dto/create-role.dto';
import { UpdateRoleDto } from './dto/update-role.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Role } from './entities/role.entity';

@Injectable()
export class RoleService {
  constructor(
    @InjectRepository(Role)
    private repository: Repository<Role>
  ){}

  async create(createRoleDto: CreateRoleDto) {
    const role = this.repository.create(createRoleDto);
    return await this.repository.save(role)
  }

  async findAll() {
    return await this.repository.find();
  }

  async findOne(id: number) {
    const role = await this.repository.findOneBy({id});
    if (!role) {
      throw new NotFoundException('Role Not Found')
    }
    return role
  }

  async update(id: number, updateRoleDto: UpdateRoleDto) {
    let role = await this.repository.findOneBy({id})
    if (!role) {
      throw new NotFoundException('Role Not Found')
    }
    role = this.repository.merge(role, updateRoleDto)
    return await this.repository.save(role);
  }

  async remove(id: number) {
    const role = await this.repository.delete(id);
    if (!role.affected) {
      throw new NotFoundException("Role Not Found")
    }
    return role;
  }
}
