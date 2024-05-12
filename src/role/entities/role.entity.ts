import {
    Column,
    Entity,
    PrimaryGeneratedColumn,
    OneToMany,
    ManyToMany,
    JoinTable,
    JoinColumn,
  } from 'typeorm';
import { IRule } from 'src/rule/interfaces/rule.interface';
import { IRole } from '../interfaces/role.interface';
import { IUser } from '../../user/interfaces/user.interface';
import { User } from '../../user/entities/user.entity';
import { Rule } from '../../rule/entities/rule.entity';
  
  @Entity({ name: 'roles' })
  export class Role implements IRole {
    @PrimaryGeneratedColumn()
    id: number;
  
    @Column()
    title: string;
  
    @Column()
    description: string;
  
    @ManyToMany(() => Rule, (rule) => rule.roles, {
      onDelete: 'SET NULL',
      onUpdate: 'CASCADE',
      eager: true
    })
    @JoinTable(
      {
        name: 'role_rules',
        joinColumn: {
          name: 'rule_id',
          referencedColumnName: 'id'
        },
        inverseJoinColumn: {
          name: "role_id",
          referencedColumnName: "id"
        }
      }
    )
    rules: IRule[];
  
    @OneToMany(() => User, (user) => user.role)
    users: IUser[];
  }
  