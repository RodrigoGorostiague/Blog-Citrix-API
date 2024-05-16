import { Injectable, NotFoundException } from '@nestjs/common';
import { Users } from '../entities/users.entity';
import { CreateUserDto, UpdateUserDto } from '../dtos/user.dto';
import { PostsService } from 'src/posting/services/posts.service';
import { Posting } from 'src/posting/entities/posts.entity';

@Injectable()
export class UsersService {
  constructor(private postService: PostsService) {}
  private users: Users[] = [
    {
      id: 1,
      name: 'First User',
      email: '',
      password: '1234',
      img: 'https://source.unsplash.com/random',
      role: 'admin',
    },
    {
      id: 2,
      name: 'Second User',
      email: '',
      password: '1234',
      img: 'https://source.unsplash.com/random',
      role: 'user',
    },
  ];

  findAll() {
    return this.users;
  }

  findOne(id: number) {
    const user = this.users.find((user) => user.id === id);
    if (!user) {
      throw new NotFoundException('User not found');
    } else {
      return user;
    }
  }

  create(payload: CreateUserDto) {
    const newUser = {
      id: this.users.length + 1,
      ...payload,
    };
    this.users.push(newUser);
    return newUser;
  }

  update(id: number, payload: UpdateUserDto) {
    const user = this.findOne(id);
    if (!user) {
      return null;
    } else {
      const index = this.users.indexOf(user);
      this.users[index] = {
        ...user,
        ...payload,
      };
      return this.users[index];
    }
  }

  remove(id: number) {
    const index = this.users.findIndex((user) => user.id === id);
    if (index === -1) {
      throw new NotFoundException('User not found');
    } else {
      this.users.splice(index, 1);
      return true;
    }
  }

  getPostsByUser(id: number): Posting[] {
    const user = this.findOne(id);
    return this.postService
      .findAll()
      .filter((post) => post.user.id === user.id);
  }
}
