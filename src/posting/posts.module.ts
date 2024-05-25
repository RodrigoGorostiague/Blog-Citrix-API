import { Module } from '@nestjs/common';
import { CategoriesController } from './controllers/categories.controller';
import { PostsController } from './controllers/posts.controller';
import { ReplysController } from './controllers/replys.controller';
import { CategoriesService } from './services/categories.service';
import { PostsService } from './services/posts.service';
import { ReplysService } from './services/replys.service';
import { TagsService } from './services/tags.service';
import { TagsController } from './controllers/tags.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Posting } from './entities/posts.entity';
import { Tags } from './entities/tags.entity';
import { Categories } from './entities/categories.entity';
import { Replys } from './entities/replys.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Posting, Categories, Tags, Replys])],
  controllers: [
    CategoriesController,
    PostsController,
    ReplysController,
    TagsController,
  ],
  providers: [CategoriesService, PostsService, ReplysService, TagsService],
  exports: [PostsService],
})
export class PostsModule {}
