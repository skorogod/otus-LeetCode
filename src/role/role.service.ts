import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateRoleDto } from './dto/create-role.dto';
import { UpdateRoleDto } from './dto/update-role.dto';
import { RoleRepository } from './role.repository';

@Injectable()
export class RoleService {
  constructor(private readonly repository: RoleRepository) { 
  }
  create(createRoleDto: CreateRoleDto) {
    return this.repository.create(createRoleDto)
  }

  findAll() {
    return this.repository.findAll()
  }

  findOne(id: number) {
    const role = this.repository.find(id)
    if(!role) {
      throw new NotFoundException('Role not found')
    }
    return role;
  }

  update(id: number, updateRoleDto: UpdateRoleDto) {
    const role = this.repository.update(id, updateRoleDto)
    if(!role) {
      throw new NotFoundException('Role not found')
    }
    return role;
  }

  remove(id: number) {
   const role = this.repository.remove(id)
   if (!role) {
    throw new NotFoundException('Role not found')
   }
   return role
  }
}
