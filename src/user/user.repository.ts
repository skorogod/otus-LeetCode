import { Injectable } from "@nestjs/common";
import { IUser } from "./interfaces/user.interface";

@Injectable()
export class UserRepository {
    private users: IUser[] = [
        {
          id: 0,
          email: 'test@mail.ru',
          password: 'qwertyvbnm',
          username: 'user123',
          role: {
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
        },
      ];

    findAll (): IUser[] {
        return this.users
      };
      
    find (id: number): IUser | null {
        return this.users.find((r) => r.id === id)
    };
    
    create (newUser: Omit<IUser, 'id'>): IUser {
        this.users.push({
            ...newUser,
            id: this.users.length
        })
        return this.users.at(-1)
    };
    
    update (id: number, user: Partial<IUser>): IUser | null {
        const index = this.users.findIndex(r => r.id === id)
        if (index === -1) {
            return null;
        }
        this.users[index] = {
                ...this.users[index],
                ...user,
                id
        }
        return this.users[index]
    };
    
    remove (id: number): IUser | null {
        const index = this.users.findIndex(el => el.id === id)
        if (index === -1) {
            return null;
        }
        const user = this.users[index]
        this.users = this.users.filter(r => r.id !== id)
        return user
    }
}