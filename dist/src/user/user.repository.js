"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRepository = void 0;
const common_1 = require("@nestjs/common");
let UserRepository = class UserRepository {
    constructor() {
        this.users = [
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
    }
    findAll() {
        return this.users;
    }
    ;
    find(id) {
        return this.users.find((r) => r.id === id);
    }
    ;
    create(newUser) {
        this.users.push({
            ...newUser,
            id: this.users.length
        });
        return this.users.at(-1);
    }
    ;
    update(id, user) {
        const index = this.users.findIndex(r => r.id === id);
        if (index === -1) {
            return null;
        }
        this.users[index] = {
            ...this.users[index],
            ...user,
            id
        };
        return this.users[index];
    }
    ;
    remove(id) {
        const index = this.users.findIndex(el => el.id === id);
        if (index === -1) {
            return null;
        }
        const user = this.users[index];
        this.users = this.users.filter(r => r.id !== id);
        return user;
    }
};
exports.UserRepository = UserRepository;
exports.UserRepository = UserRepository = __decorate([
    (0, common_1.Injectable)()
], UserRepository);
//# sourceMappingURL=user.repository.js.map