import { IRole } from "./interfaces/role.interface";
export declare class RoleRepository {
    roles: IRole[];
    findAll(): IRole[];
    find(id: number): IRole | null;
    create(newRole: Omit<IRole, 'id'>): IRole;
    update(id: number, role: Partial<IRole>): IRole | null;
    remove(id: number): IRole | null;
}
