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

import { dataSourceConfig } from './config/typeorm';
import { AuthModule } from './auth/auth.module';
import { APP_GUARD } from '@nestjs/core';
import { JwtAuthGuard } from './auth/guards/jwt-auth-guards';

@Module({
  imports: [
    TypeOrmModule.forRoot(dataSourceConfig),
    TaskModule, 
    UserModule, 
    CommentModule, 
    LevelModule, 
    RuleModule, 
    RoleModule, 
    TaskTypeModule, AuthModule
  ],
  controllers: [AppController],
  providers: [AppService, {
    provide: APP_GUARD,
    useClass: JwtAuthGuard
  }],
})


export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes('*');
  }
}
