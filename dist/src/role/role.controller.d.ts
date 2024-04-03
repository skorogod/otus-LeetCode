import { RoleService } from './role.service';
import { CreateRoleDto } from './dto/create-role.dto';
import { UpdateRoleDto } from './dto/update-role.dto';
export declare class RoleController {
    private readonly roleService;
    constructor(roleService: RoleService);
    create(createRoleDto: CreateRoleDto): import("src/role/interfaces/role.interface").IRole;
    findAll(): import("src/role/interfaces/role.interface").IRole[];
    findOne(id: string): import("src/role/interfaces/role.interface").IRole;
    update(id: string, updateRoleDto: UpdateRoleDto): import("src/role/interfaces/role.interface").IRole;
    remove(id: string): import("src/role/interfaces/role.interface").IRole;
}
