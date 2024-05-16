import { Module } from '@nestjs/common';
import { CategoriesController } from './controllers/categories.controller';
import { PostsController } from './controllers/posts.controller';
import { ReplysController } from './controllers/replys.controller';
import { CategoriesService } from './services/categories.service';
import { PostsService } from './services/posts.service';
import { ReplysService } from './services/replys.service';
import { TagsService } from './services/tags.service';
import { TagsController } from './controllers/tags.controller';

@Module({
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
