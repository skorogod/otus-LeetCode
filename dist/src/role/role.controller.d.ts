import { RoleService } from './role.service';
import { CreateRoleDto } from './dto/create-role.dto';
import { UpdateRoleDto } from './dto/update-role.dto';
export declare class RoleController {
    private readonly roleService;
    constructor(roleService: RoleService);
    create(createRoleDto: CreateRoleDto): Promise<import("src/role/entities/role.entity").Role>;
    findAll(): Promise<import("src/role/entities/role.entity").Role[]>;
    findOne(id: string): Promise<import("src/role/entities/role.entity").Role>;
    update(id: string, updateRoleDto: UpdateRoleDto): Promise<import("src/role/entities/role.entity").Role>;
    remove(id: string): Promise<import("typeorm").DeleteResult>;
}
