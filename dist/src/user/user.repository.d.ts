import { IUser } from "./interfaces/user.interface";
export declare class UserRepository {
    private users;
    findAll(): IUser[];
    find(id: number): IUser | null;
    create(newUser: Omit<IUser, 'id'>): IUser;
    update(id: number, user: Partial<IUser>): IUser | null;
    remove(id: number): IUser | null;
}
