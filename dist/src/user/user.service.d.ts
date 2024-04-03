import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserRepository } from './user.repository';
export declare class UserService {
    private readonly repository;
    constructor(repository: UserRepository);
    create(createUserDto: CreateUserDto): import("src/user/interfaces/user.interface").IUser;
    findAll(): import("src/user/interfaces/user.interface").IUser[];
    findOne(id: number): import("src/user/interfaces/user.interface").IUser;
    update(id: number, updateUserDto: UpdateUserDto): import("src/user/interfaces/user.interface").IUser;
    remove(id: number): import("src/user/interfaces/user.interface").IUser;
}
