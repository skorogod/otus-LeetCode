import { LevelService } from './level.service';
import { CreateLevelDto } from './dto/create-level.dto';
import { UpdateLevelDto } from './dto/update-level.dto';
export declare class LevelController {
    private readonly levelService;
    constructor(levelService: LevelService);
    create(createLevelDto: CreateLevelDto): Promise<import("src/level/entities/level.entity").Level>;
    findAll(): Promise<import("src/level/entities/level.entity").Level[]>;
    findOne(id: string): Promise<import("src/level/entities/level.entity").Level>;
    update(id: string, updateLevelDto: UpdateLevelDto): Promise<import("src/level/entities/level.entity").Level>;
    remove(id: string): Promise<import("typeorm").DeleteResult>;
}
