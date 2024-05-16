import { Injectable, NotFoundException } from '@nestjs/common';
import { Replys } from '../entities/replys.entity';
import { CreateReplysDto, UpdateReplysDto } from '../dtos/replys.dto';

@Injectable()
export class ReplysService {
  replys: Replys[] = [
    {
      id: 1,
      createAt: new Date(),
      title: 'First Reply',
      content: 'This is the first reply',
      img: 'https://source.unsplash.com/random',
      updateAt: new Date(),
      post: null,
      user: null,
    },
    {
      id: 2,
      createAt: new Date(),
      title: 'Second Reply',
      content: 'This is the second reply',
      img: 'https://source.unsplash.com/random',
      updateAt: new Date(),
      post: null,
      user: null,
    },
  ];

  findAll() {
    return this.replys;
  }

  findOne(id: number) {
    const reply = this.replys.find((reply) => reply.id === id);
    if (!reply) {
      throw new NotFoundException('Reply not found');
    } else {
      return reply;
    }
  }

  create(payload: CreateReplysDto) {
    const newReply = {
      id: this.replys.length + 1,
      ...payload,
    };
    this.replys.push(newReply);
    return newReply;
  }

  update(id: number, payload: UpdateReplysDto) {
    const reply = this.findOne(id);
    if (!reply) {
      return null;
    } else {
      const index = this.replys.indexOf(reply);
      this.replys[index] = {
        ...reply,
        ...payload,
      };
      return this.replys[index];
    }
  }

  remove(id: number) {
    const index = this.replys.findIndex((reply) => reply.id === id);
    if (index === -1) {
      return null;
    } else {
      this.replys.splice(index, 1);
      return true;
    }
  }
}
