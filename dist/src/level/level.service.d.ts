import { CreateLevelDto } from './dto/create-level.dto';
import { UpdateLevelDto } from './dto/update-level.dto';
import { LevelRepository } from './level.repository';
export declare class LevelService {
    private readonly repository;
    constructor(repository: LevelRepository);
    create(createLevelDto: CreateLevelDto): import("src/level/interfaces/level.interface").ILevel;
    findAll(): import("src/level/interfaces/level.interface").ILevel[];
    findOne(id: number): import("src/level/interfaces/level.interface").ILevel;
    update(id: number, updateLevelDto: UpdateLevelDto): import("src/level/interfaces/level.interface").ILevel;
    remove(id: number): import("src/level/interfaces/level.interface").ILevel;
}
