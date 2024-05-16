import * as Joi from 'joi';

import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { PostsModule } from './posting/posts.module';
import { AppController } from './app.controller';
import { PostsController } from './posting/controllers/posts.controller';
import { ReplysController } from './posting/controllers/replys.controller';
import { UsersController } from './users/controllers/users.controller';
import { CategoriesController } from './posting/controllers/categories.controller';
import { AppService } from './app.service';
import { PostsService } from './posting/services/posts.service';
import { CategoriesService } from './posting/services/categories.service';
import { UsersService } from './users/services/users.service';
import { ReplysService } from './posting/services/replys.service';
import { DatabaseModule } from './database/database.module';
import { ConfigModule } from '@nestjs/config';
import config from './config';

@Module({
  imports: [
    UsersModule,
    PostsModule,
    DatabaseModule,
    ConfigModule.forRoot({
      envFilePath: '.env',
      load: [config],
      isGlobal: true,
      validationSchema: Joi.object({
        PORT: Joi.number().default(3000),
        DATABASE_HOST: Joi.string().required(),
        DATABASE_PORT: Joi.number().required(),
        DATABASE_USER: Joi.string().required(),
        DATABASE_PASSWORD: Joi.string().required(),
        DATABASE_NAME: Joi.string().required(),
      }),
    }),
  ],
  controllers: [
    AppController,
    PostsController,
    ReplysController,
    UsersController,
    CategoriesController,
  ],
  providers: [
    AppService,
    PostsService,
    CategoriesService,
    UsersService,
    ReplysService,
  ],
})
export class AppModule {}
