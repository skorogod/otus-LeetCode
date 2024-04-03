import { IRule } from 'src/rule/interfaces/rule.interface';
import { IRole } from '../interfaces/role.interface';
import { IUser } from 'src/user/interfaces/user.interface';
export declare class Role implements IRole {
    id: number;
    title: string;
    description: string;
    rules: IRule[];
    users: IUser[];
}
