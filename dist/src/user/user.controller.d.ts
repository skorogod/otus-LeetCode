import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    create(createUserDto: CreateUserDto): import("src/user/interfaces/user.interface").IUser;
    findAll(): import("src/user/interfaces/user.interface").IUser[];
    findOne(id: string): import("src/user/interfaces/user.interface").IUser;
    update(id: string, updateUserDto: UpdateUserDto): import("src/user/interfaces/user.interface").IUser;
    remove(id: string): import("src/user/interfaces/user.interface").IUser;
}
