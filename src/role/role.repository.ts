import { Injectable } from "@nestjs/common";
import { IRole } from "./interfaces/role.interface";

@Injectable()
export class RoleRepository {
    private roles: IRole[] = [
        {
          id: 0,
          title: 'Пользователь',
          description: 'Описание роли',
          rules: [
            {
              id: 0,
              title: 'Просмотр задач',
              description: 'Пользователь может просматривать информацию о задачах',
            },
            {
              id: 1,
              title: 'Выполнение задач',
              description: 'Пользователь может выполнять задачи',
            },
          ],
        },
      ];

    findAll (): IRole[] {
        return this.roles
      };
      
    find (id: number): IRole | null {
        return this.roles.find((r) => r.id === id)
    };
    
    create (newRole: Omit<IRole, 'id'>): IRole {
        this.roles.push({
            ...newRole,
            id: this.roles.length
        })
        return this.roles.at(-1)
    };
    
    update (id: number, role: Partial<IRole>): IRole | null {
        const index = this.roles.findIndex(r => r.id === id)
        if (index === -1) {
            return null;
        }
        this.roles[index] = {
                ...this.roles[index],
                ...role,
                id
        }
        return this.roles[index]
    };
    
    remove (id: number): IRole | null {
        const index = this.roles.findIndex(el => el.id === id)
        if (index === -1) {
            return null;
        }
        const role = this.roles[index]
        this.roles = this.roles.filter(r => r.id !== id)
        return role
    }
}