"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RoleRepository = void 0;
const common_1 = require("@nestjs/common");
let RoleRepository = class RoleRepository {
    constructor() {
        this.roles = [
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
    }
    findAll() {
        return this.roles;
    }
    ;
    find(id) {
        return this.roles.find((r) => r.id === id);
    }
    ;
    create(newRole) {
        this.roles.push({
            ...newRole,
            id: this.roles.length
        });
        return this.roles.at(-1);
    }
    ;
    update(id, role) {
        const index = this.roles.findIndex(r => r.id === id);
        if (index === -1) {
            return null;
        }
        this.roles[index] = {
            ...this.roles[index],
            ...role,
            id
        };
        return this.roles[index];
    }
    ;
    remove(id) {
        const index = this.roles.findIndex(el => el.id === id);
        if (index === -1) {
            return null;
        }
        const role = this.roles[index];
        this.roles = this.roles.filter(r => r.id !== id);
        return role;
    }
};
exports.RoleRepository = RoleRepository;
exports.RoleRepository = RoleRepository = __decorate([
    (0, common_1.Injectable)()
], RoleRepository);
//# sourceMappingURL=role.repository.js.map