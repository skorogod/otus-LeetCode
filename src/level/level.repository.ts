import { Injectable } from "@nestjs/common";
import { ILevel } from "./interfaces/level.interface";

@Injectable()
export class LevelRepository {
    levels: ILevel[] = [
        {
          id: 0,
          title: 'Легкий',
          tasks: []
        },
      ];

    findAll (): ILevel[] {
        return this.levels
      };
      
    find (id: number): ILevel | null {
        return this.levels.find((r) => r.id === id)
    };
    
    create (newLevel: Omit<ILevel, 'id'>): ILevel {
        this.levels.push({
            ...newLevel,
            id: this.levels.length
        })
        console.log("LEVELS ", this.levels)
        return this.levels.at(-1)
    };
    
    update (id: number, level: Partial<ILevel>): ILevel | null {
        const index = this.levels.findIndex(r => r.id === id)
        if (index === -1) {
            return null;
        }
        this.levels[index] = {
                ...this.levels[index],
                ...level,
                id
        }
        return this.levels[index]
    };
    
    remove (id: number): ILevel | null {
        const index = this.levels.findIndex(el => el.id === id)
        if (index === -1) {
            return null;
        }
        const level = this.levels[index]
        this.levels = this.levels.filter(r => r.id !== id)
        return level
    }
}