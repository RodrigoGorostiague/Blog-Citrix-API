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
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { TagsService } from '../services/tags.service';
import { CreateTagsDto, UpdateTagsDto } from '../dtos/tags.dto';

@ApiTags('Tags')
@Controller('tags')
export class TagsController {
  constructor(private tagsServices: TagsService) {}

  @Get()
  @ApiOperation({
    summary: 'List of all tags',
    description: 'List of all tags in the database',
  })
  @HttpCode(HttpStatus.OK)
  getAll() {
    return this.tagsServices.findAll();
  }

  @Get(':id')
  @ApiOperation({
    summary: 'Get one tag',
    description: 'Get one tag by id',
  })
  @HttpCode(HttpStatus.OK)
  getOne(id: number) {
    return this.tagsServices.findOne(id);
  }

  @Post()
  @ApiOperation({
    summary: 'Create a tag',
    description: 'Create a new tag',
  })
  @HttpCode(HttpStatus.CREATED)
  createTag(@Body() payload: CreateTagsDto) {
    return this.tagsServices.create(payload);
  }

  @Put(':id')
  @ApiOperation({
    summary: 'Update a tag',
    description: 'Update a tag by id',
  })
  @HttpCode(HttpStatus.ACCEPTED)
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() payload: UpdateTagsDto,
  ) {
    return this.tagsServices.update(id, payload);
  }

  @Delete(':id')
  @ApiOperation({
    summary: 'Delete a tag',
    description: 'Delete a tag by id',
  })
  @HttpCode(HttpStatus.NO_CONTENT)
  delete(@Param('id', ParseIntPipe) id: number) {
    return this.tagsServices.remove(id);
  }
}
