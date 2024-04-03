import { Injectable } from "@nestjs/common";
import { ITask } from "./interfaces/task.interface";

@Injectable()
export class TaskRepository {
    private tasks: ITask[] = [
        {
          id: 0,
          title: 'Сортировка массива',
          description: 'Отсортируйте массив [2,4,1,6]',
          level: { id: 0, title: 'light', tasks: [] },
          tags: ['Массив', 'сортировка'],
          links: ['testlink.com'],
        },
      ];

    findAll (): ITask[] {
        return this.tasks
      };
      
    find (id: number): ITask | null {
        return this.tasks.find((r) => r.id === id)
    };
    
    create (newTask: Omit<ITask, 'id'>): ITask {
        this.tasks.push({
            ...newTask,
            id: this.tasks.length
        })
        return this.tasks.at(-1)
    };
    
    update (id: number, task: Partial<ITask>): ITask | null {
        const index = this.tasks.findIndex(r => r.id === id)
        if (index === -1) {
            return null;
        }
        this.tasks[index] = {
                ...this.tasks[index],
                ...task,
                id
        }
        return this.tasks[index]
    };
    
    remove (id: number): ITask | null {
        const index = this.tasks.findIndex(el => el.id === id)
        if (index === -1) {
            return null;
        }
        const task = this.tasks[index]
        this.tasks = this.tasks.filter(r => r.id !== id)
        return task
    }
}