import { Module } from '@nestjs/common';
import { UsersController } from './controllers/users.controller';
import { UsersService } from './services/users.service';
import { PostsModule } from 'src/posting/posts.module';

@Module({
  controllers: [UsersController],
  providers: [UsersService],
  exports: [],
  imports: [PostsModule],
})
export class UsersModule {}
