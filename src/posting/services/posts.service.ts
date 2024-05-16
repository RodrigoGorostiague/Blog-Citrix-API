import { Injectable, NotFoundException } from '@nestjs/common';
import { Posting } from '../entities/posts.entity';
import { CreatePostDto, UpdatePostDto } from '../dtos/posts.dto';

@Injectable()
export class PostsService {
  private posts: Posting[] = [
    {
      id: 1,
      createAt: new Date(),
      title: 'First Post',
      content: 'This is the first post',
      img: 'https://source.unsplash.com/random',
      user: null,
      tags: [],
      categories: [],
    },
    {
      id: 2,
      createAt: new Date(),
      title: 'Second Post',
      content: 'This is the second post',
      img: 'https://source.unsplash.com/random',
      user: null,
      tags: [],
      categories: [],
    },
  ];

  findAll(): Posting[] {
    return this.posts;
  }

  findOne(id: number) {
    const post = this.posts.find((post) => post.id === id);
    if (!post) {
      throw new NotFoundException('Post not found');
    } else {
      return post;
    }
  }

  create(payload: CreatePostDto) {
    const newPost = {
      id: this.posts.length + 1,
      ...payload,
    };
    this.posts.push(newPost);
    return newPost;
  }

  update(id: number, payload: UpdatePostDto) {
    const post = this.findOne(id);
    if (!post) {
      return null;
    } else {
      const index = this.posts.indexOf(post);
      this.posts[index] = {
        ...post,
        ...payload,
      };
      return this.posts[index];
    }
  }

  remove(id: number) {
    const index = this.posts.findIndex((post) => post.id === id);
    if (index === -1) {
      throw new NotFoundException('Post not found');
    } else {
      this.posts.splice(index, 1);
      return true;
    }
  }
}
