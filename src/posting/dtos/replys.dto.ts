import { PartialType } from '@nestjs/mapped-types';
import { IsDate, IsNotEmpty, IsString, IsUrl } from 'class-validator';
import { Posting } from '../entities/posts.entity';
import { Users } from 'src/users/entities/users.entity';
import { ApiProperty } from '@nestjs/swagger';

export class CreateReplysDto {
  @IsDate()
  @IsNotEmpty()
  @ApiProperty({
    description: 'Fecha de creación',
    type: Date,
    default: new Date(),
  })
  createAt: Date;
  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    description: 'Titulo del post',
    type: String,
  })
  title: string;
  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    description: 'Contenido del post',
    type: String,
  })
  content: string;
  @IsUrl()
  @ApiProperty({
    description: 'URL de la imagen del post',
    type: String,
  })
  img: string;
  @IsDate()
  @ApiProperty({
    description: 'Fecha de actualización',
    type: Date,
  })
  updateAt: Date;
  @ApiProperty({
    description: 'Post al que se responde',
    type: Posting,
  })
  post: Posting;
  @ApiProperty({
    description: 'Usuario que responde',
    type: Users,
  })
  user: Users;
}

export class UpdateReplysDto extends PartialType(CreateReplysDto) {}
