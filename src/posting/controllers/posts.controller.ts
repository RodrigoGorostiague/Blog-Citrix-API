import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  ParseIntPipe,
  Post,
  Put,
} from '@nestjs/common';
import { PostsService } from '../services/posts.service';
import { CreatePostDto, UpdatePostDto } from '../dtos/posts.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

/**
 * @ApiTags nos permite agregar tags a nuestra documentación de Swagger y de esta manera
 * agrupar los endpoints.
 */
@ApiTags('Posts')
@Controller('posts')
export class PostsController {
  constructor(private postsService: PostsService) {}

  @Get()
  /**
   * @ApiOperation nos permite agregar una descripción a nuestro endpoint en la documentación
   */
  @ApiOperation({ summary: 'List of all posts' })
  @HttpCode(HttpStatus.OK)
  getAll() {
    return this.postsService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get one post' })
  @HttpCode(HttpStatus.OK)
  getOne(@Param('id', ParseIntPipe) id: number) {
    return this.postsService.findOne(id);
  }
  @Post()
  @ApiOperation({ summary: 'Create a post' })
  @HttpCode(HttpStatus.CREATED)
  createPost(@Body() payload: CreatePostDto) {
    return this.postsService.create(payload);
  }
  @Put(':id')
  @ApiOperation({ summary: 'Update a post' })
  @HttpCode(HttpStatus.ACCEPTED)
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() payload: UpdatePostDto,
  ) {
    return this.postsService.update(id, payload);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete a post' })
  @HttpCode(HttpStatus.NO_CONTENT)
  delete(@Param('id', ParseIntPipe) id: number) {
    return this.postsService.remove(id);
  }
}
