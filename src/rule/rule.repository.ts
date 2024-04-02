import { Injectable } from "@nestjs/common";
import { IRule } from "./interfaces/rule.interface";

@Injectable()
export class RuleRepository {
    private rules: IRule[] =[
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
    ];

    findAll (): IRule[] {
        return this.rules
      };
      
    find (id: number): IRule | null {
        return this.rules.find((r) => r.id === id)
    };
    
    create (newRule: Omit<IRule, 'id'>): IRule {
        this.rules.push({
            ...newRule,
            id: this.rules.length
        })
        return this.rules.at(-1)
    };
    
    update (id: number, rule: Partial<IRule>): IRule | null {
        const index = this.rules.findIndex(r => r.id === id)
        if (index === -1) {
            return null;
        }
        this.rules[index] = {
                ...this.rules[index],
                ...rule,
                id
        }
        return this.rules[index]
    };
    
    remove (id: number): IRule | null {
        const index = this.rules.findIndex(el => el.id === id)
        if (index === -1) {
            return null;
        }
        const rule = this.rules[index]
        this.rules = this.rules.filter(r => r.id !== id)
        return rule
    }
}