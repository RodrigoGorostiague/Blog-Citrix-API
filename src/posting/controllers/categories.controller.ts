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
import { CategoriesService } from '../services/categories.service';
import {
  CreateCategoriesDto,
  UpdateCategoriesDto,
} from '../dtos/categories.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('Categories')
@Controller('categories')
export class CategoriesController {
  constructor(private categoriesService: CategoriesService) {}

  @Get()
  @ApiOperation({
    summary: 'List of all categories',
    description: 'List of all categories in the database',
  })
  @HttpCode(HttpStatus.OK)
  getAll() {
    return this.categoriesService.findAll();
  }

  @Get(':id')
  @ApiOperation({
    summary: 'Get one category',
    description: 'Get one category by id',
  })
  @HttpCode(HttpStatus.OK)
  getOne(id: number) {
    return this.categoriesService.findOne(id);
  }

  @Post()
  @ApiOperation({
    summary: 'Create a category',
    description: 'Create a new category',
  })
  @HttpCode(HttpStatus.CREATED)
  createCategory(@Body() payload: CreateCategoriesDto) {
    return this.categoriesService.create(payload);
  }

  @Put(':id')
  @ApiOperation({
    summary: 'Update a category',
    description: 'Update a category by id',
  })
  @HttpCode(HttpStatus.ACCEPTED)
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() payload: UpdateCategoriesDto,
  ) {
    return this.categoriesService.update(id, payload);
  }

  @Delete(':id')
  @ApiOperation({
    summary: 'Delete a category',
    description: 'Delete a category by id',
  })
  @HttpCode(HttpStatus.NO_CONTENT)
  delete(@Param('id', ParseIntPipe) id: number) {
    return this.categoriesService.remove(id);
  }
}
