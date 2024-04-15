import { DataSourceOptions } from 'typeorm';
import { User } from '../user/entities/user.entity';
import { Level } from '../level/entities/level.entity';
import { Task } from '../task/entities/task.entity';
import { Rule } from '../rule/entities/rule.entity';
import { Role } from '../role/entities/role.entity';
import { TaskType } from '../task-type/entities/task-type.entity';
import { Comment } from '../comment/entities/comment.entity';


import { config as dbconfig} from 'dotenv'
dbconfig()

export const dataSourceConfig: DataSourceOptions = {
  type: 'postgres', 
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  entities: [User, Task, Comment, Level, Rule, Role, TaskType],
  migrations: ["src/database/migrations/*.js"],
  synchronize: true,
};