import { ILevel } from "./interfaces/level.interface";
export declare class LevelRepository {
    levels: ILevel[];
    findAll(): ILevel[];
    find(id: number): ILevel | null;
    create(newLevel: Omit<ILevel, 'id'>): ILevel;
    update(id: number, level: Partial<ILevel>): ILevel | null;
    remove(id: number): ILevel | null;
}
