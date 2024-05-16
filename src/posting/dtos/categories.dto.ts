import { PartialType } from '@nestjs/mapped-types';
import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class CreateCategoriesDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    description: 'Nombre de la categoría',
    type: String,
  })
  readonly name: string;
  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    description: 'Descripción de la categoría',
    type: String,
  })
  readonly description: string;
}

export class UpdateCategoriesDto extends PartialType(CreateCategoriesDto) {}
