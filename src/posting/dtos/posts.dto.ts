import { PartialType } from '@nestjs/mapped-types';
import { IsDate, IsNotEmpty, IsString, IsUrl } from 'class-validator';
import { Users } from 'src/users/entities/users.entity';
import { Categories } from '../entities/categories.entity';
import { Tags } from '../entities/tags.entity';
import { ApiProperty } from '@nestjs/swagger';

/**
 * Para modificar la documentacion que autogenera Swagger en la API debemos modificar los DTOs
 * utiizando los distintos decoradores que nos proporciona Swagger.
 * Podemos verlos a profundidad dentro de https://docs.nestjs.com/openapi/decorators.
 * El tipado de swagger se instala con el comando npm install @nestjs/swagger swagger-ui-express
 */

export class CreatePostDto {
  @IsDate()
  @IsNotEmpty()
  /* @ApiProperty() es un decorador que nos permite modificar la documentacion que a
   * utogenera Swagger en la API.
   * Tambien permite retratar referencias a otros DTOs, entidades, etc.
   */
  @ApiProperty({
    description: 'Fecha de creación del post',
    type: Date,
    default: new Date(),
  })
  readonly createAt: Date;
  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    description: 'Titulo del post',
    type: String,
  })
  readonly title: string;
  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    description: 'Contenido del post',
    type: String,
  })
  readonly content: string;
  @IsUrl()
  @ApiProperty({
    description: 'URL de la imagen del post',
    type: String,
  })
  readonly img: string;
  @ApiProperty({
    description: 'Usuario que crea el post',
    type: Users,
  })
  user: Users;
  @ApiProperty({
    description: 'Tags del post',
    type: Tags,
  })
  tags: Tags[];
  @ApiProperty({
    description: 'Categorias del post',
    type: Categories,
  })
  categories: Categories[];
}

export class UpdatePostDto extends PartialType(CreatePostDto) {}
