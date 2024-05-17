import { Injectable, NotFoundException } from '@nestjs/common';
import { Posting } from '../entities/posts.entity';
import { CreatePostDto, UpdatePostDto } from '../dtos/posts.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

/**
 * Los servicios dentro de NestJs son clases que se encargan de
 * la lógica de negocio de nuestra aplicación.
 * Al utilizar TypeORM, utilizamos el patron de diseño Repository ( TypeORM tambien cuenta con el patron Active Record )
 * El patron de diseño Repository se encarga de
 * encapsular la lógica de acceso a datos de nuestra aplicación en una sola clase.
 * En este caso, los servicios se encargan de interactuar con los repositorios de TypeORM.
 * Se elige este patron de diseño para poder separar la lógica de negocio de la lógica
 * de acceso a datos y tambien porque NestJS utiliza este patron de diseño y asi lo recomienda a
 * la hora de utilizar TypeORM.
 */

@Injectable()
export class PostsService {
  constructor(
    @InjectRepository(Posting) private postRepository: Repository<Posting>,
  ) {}

  findAll() {
    return this.postRepository.find();
  }

  async findOne(id: number) {
    const post = await this.postRepository.findOneBy({ id });
    if (!post) {
      throw new NotFoundException('Post not found');
    } else {
      return post;
    }
  }

  create(payload: CreatePostDto) {
    const newPost = this.postRepository.create(payload);
    return this.postRepository.save(newPost);
  }

  async update(id: number, payload: UpdatePostDto) {
    const post = await this.postRepository.findOneBy({ id });
    if (!post) {
      throw new NotFoundException('Post not found');
    } else {
      this.postRepository.merge(post, payload);
      return this.postRepository.save(post);
    }
  }

  async remove(id: number) {
    const post = await this.postRepository.findOneBy({ id });
    if (!post) {
      throw new NotFoundException('Post not found');
    } else {
      return this.postRepository.delete(post.id);
    }
  }
}
