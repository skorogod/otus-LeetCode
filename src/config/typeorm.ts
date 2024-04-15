import { DataSource, DataSourceOptions } from 'typeorm';
import { User } from '../user/entities/user.entity';
import { Level } from '../level/entities/level.entity';
import { Task } from '../task/entities/task.entity';
import { Rule } from '../rule/entities/rule.entity';
import { Role } from '../role/entities/role.entity';
import { TaskType } from '../task-type/entities/task-type.entity';
import { Comment } from '../comment/entities/comment.entity';

export const config: DataSourceOptions = {
  type: 'postgres', 
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'qwertyvbnm',
  database: 'LeetCode',
  entities: [User, Task, Comment, Level, Rule, Role, TaskType],
  migrations: ["src/database/migrations/*.js"],
  synchronize: true,
};