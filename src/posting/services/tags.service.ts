import { Injectable } from '@nestjs/common';
import { Tags } from '../entities/tags.entity';
import { CreateTagsDto, UpdateTagsDto } from '../dtos/tags.dto';

@Injectable()
export class TagsService {
  tags: Tags[] = [
    {
      id: 1,
      name: 'Node.js',
      description:
        'Node.js is a JavaScript runtime built on Chrome V8 JavaScript engine',
      posts: [],
    },
    {
      id: 2,
      name: 'NestJS',
      description:
        'A progressive Node.js framework for building efficient, reliable and scalable server-side applications',
      posts: [],
    },
    {
      id: 3,
      name: 'Angular',
      description:
        'A platform and framework for building single-page client applications using HTML and TypeScript',
      posts: [],
    },
    {
      id: 4,
      name: 'PostgreSQL',
      description: 'A powerful',
      posts: [],
    },
  ];

  findAll() {
    return this.tags;
  }

  findOne(id: number) {
    return this.tags.find((tag) => tag.id === id);
  }

  create(payload: CreateTagsDto) {
    const newTag = {
      id: this.tags.length + 1,
      ...payload,
    };
    this.tags.push(newTag);
    return newTag;
  }

  update(id: number, payload: UpdateTagsDto) {
    const tag = this.findOne(id);
    if (!tag) {
      return null;
    } else {
      const index = this.tags.indexOf(tag);
      this.tags[index] = {
        ...tag,
        ...payload,
      };
      return this.tags[index];
    }
  }

  remove(id: number) {
    const index = this.tags.findIndex((tag) => tag.id === id);
    if (index === -1) {
      return null;
    } else {
      return this.tags.splice(index, 1);
    }
  }
}
