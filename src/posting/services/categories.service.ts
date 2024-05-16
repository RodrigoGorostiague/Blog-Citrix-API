import { Injectable, NotFoundException } from '@nestjs/common';
import { Categories } from '../entities/categories.entity';
import {
  CreateCategoriesDto,
  UpdateCategoriesDto,
} from '../dtos/categories.dto';

@Injectable()
export class CategoriesService {
  private categories: Categories[] = [
    {
      id: 1,
      name: 'Category 1',
      description: 'This is the category 1',
    },
    {
      id: 2,
      name: 'Category 2',
      description: 'This is the category 2',
    },
  ];

  findAll() {
    return this.categories;
  }

  findOne(id: number) {
    const category = this.categories.find((category) => category.id === id);
    if (!category) {
      throw new NotFoundException('Category not found');
    } else {
      return category;
    }
  }

  create(payload: CreateCategoriesDto) {
    const newCategory = {
      id: this.categories.length + 1,
      ...payload,
    };
    this.categories.push(newCategory);
    return newCategory;
  }

  update(id: number, payload: UpdateCategoriesDto) {
    const category = this.findOne(id);
    if (!category) {
      return null;
    } else {
      const index = this.categories.indexOf(category);
      this.categories[index] = {
        ...category,
        ...payload,
      };
      return this.categories[index];
    }
  }

  remove(id: number) {
    const index = this.categories.findIndex((category) => category.id === id);
    if (index === -1) {
      throw new NotFoundException('Category not found');
    } else {
      this.categories.splice(index, 1);
      return true;
    }
  }
}
