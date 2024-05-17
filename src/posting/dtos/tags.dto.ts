import { PartialType } from '@nestjs/mapped-types';
import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';
import { Posting } from '../entities/posts.entity';

export class CreateTagsDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    description: 'Nombre de la etiqueta',
    type: String,
  })
  name: string;
  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    description: 'Descripción de la etiqueta',
    type: String,
  })
  description: string;
  @ApiProperty({
    description: 'Posts relacionados a la etiqueta',
    type: Posting,
  })
  posts: Posting[];
}

export class UpdateTagsDto extends PartialType(CreateTagsDto) {}
