import { PartialType } from '@nestjs/mapped-types';
import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

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
  posts: [];
}

export class UpdateTagsDto extends PartialType(CreateTagsDto) {}
