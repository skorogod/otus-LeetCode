import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    create(createUserDto: CreateUserDto): Promise<import("src/user/entities/user.entity").User>;
    findAll(): Promise<import("src/user/entities/user.entity").User[]>;
    findOne(id: string): Promise<import("src/user/entities/user.entity").User>;
    update(id: string, updateUserDto: UpdateUserDto): Promise<import("src/user/entities/user.entity").User>;
    remove(id: string): Promise<import("typeorm").DeleteResult>;
}
