import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LoggerMiddleware } from './logger.middleware';
import { TaskModule } from './task/task.module';
import { UserModule } from './user/user.module';
import { CommentModule } from './comment/comment.module';
import { LevelModule } from './level/level.module';
import { RuleModule } from './rule/rule.module';
import { RoleModule } from './role/role.module';
import { TaskTypeModule } from './task-type/task-type.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';

import { config } from './config/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot(config),
    TaskModule, 
    UserModule, 
    CommentModule, 
    LevelModule, 
    RuleModule, 
    RoleModule, 
    TaskTypeModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes('*');
  }
  constructor(private datasource: DataSource) {}
}
