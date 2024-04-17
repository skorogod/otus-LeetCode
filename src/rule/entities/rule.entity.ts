import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from 'typeorm';
import { IRule } from '../interfaces/rule.interface';
import { IRole } from '../../role/interfaces/role.interface';
import { Role } from '../../role/entities/role.entity';

@Entity({ name: 'rules' })
export class Rule implements IRule {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  description: string;

  @ManyToMany(() => Role, (role) => role.rules, {
    cascade: true,
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  roles: IRole[]
}