import { CreateRoleDto } from './dto/create-role.dto';
import { UpdateRoleDto } from './dto/update-role.dto';
import { RoleRepository } from './role.repository';
export declare class RoleService {
    private readonly repository;
    constructor(repository: RoleRepository);
    create(createRoleDto: CreateRoleDto): import("src/role/interfaces/role.interface").IRole;
    findAll(): import("src/role/interfaces/role.interface").IRole[];
    findOne(id: number): import("src/role/interfaces/role.interface").IRole;
    update(id: number, updateRoleDto: UpdateRoleDto): import("src/role/interfaces/role.interface").IRole;
    remove(id: number): import("src/role/interfaces/role.interface").IRole;
}
