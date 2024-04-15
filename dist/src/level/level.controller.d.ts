import { LevelService } from './level.service';
import { CreateLevelDto } from './dto/create-level.dto';
import { UpdateLevelDto } from './dto/update-level.dto';
export declare class LevelController {
    private readonly levelService;
    constructor(levelService: LevelService);
    create(createLevelDto: CreateLevelDto): import("src/level/interfaces/level.interface").ILevel;
    findAll(): import("src/level/interfaces/level.interface").ILevel[];
    findOne(id: string): import("src/level/interfaces/level.interface").ILevel;
    patch(id: string, updateLevelDto: UpdateLevelDto): import("src/level/interfaces/level.interface").ILevel;
    remove(id: string): import("src/level/interfaces/level.interface").ILevel;
}
