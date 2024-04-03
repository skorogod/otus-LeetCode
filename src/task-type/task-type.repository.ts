import { Injectable } from "@nestjs/common";
import { ITaskType } from "./interfaces/taskType.interface";

@Injectable()
export class TaskTypeRepository {
    private taskTypes: ITaskType[] = [
        {
          id: 0,
          title: 'Сортировка массива'
        }
      ];

    findAll (): ITaskType[] {
        return this.taskTypes
      };
      
    find (id: number): ITaskType | null {
        return this.taskTypes.find((r) => r.id === id)
    };
    
    create (newTaskType: Omit<ITaskType, 'id'>): ITaskType {
        this.taskTypes.push({
            ...newTaskType,
            id: this.taskTypes.length
        })
        return this.taskTypes.at(-1)
    };
    
    update (id: number, taskType: Partial<ITaskType>): ITaskType | null {
        const index = this.taskTypes.findIndex(r => r.id === id)
        if (index === -1) {
            return null;
        }
        this.taskTypes[index] = {
                ...this.taskTypes[index],
                ...taskType,
                id
        }
        return this.taskTypes[index]
    };
    
    remove (id: number): ITaskType | null {
        const index = this.taskTypes.findIndex(el => el.id === id)
        if (index === -1) {
            return null;
        }
        const taskType = this.taskTypes[index]
        this.taskTypes = this.taskTypes.filter(r => r.id !== id)
        return taskType
    }
}