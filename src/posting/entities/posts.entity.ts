import { Users } from '../../users/entities/users.entity';
import { Categories } from './categories.entity';
import { Tags } from './tags.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinTable,
  ManyToMany,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

/**
 * Entidad Post
 * Define la estructura de la entidad Post, la cual se utilizara para mapear la estructura de la tabla
 * mediante los decoradores de TypeORM.
 * los mas importantes o utilizados son:
 * @Entity: Define la entidad y la tabla a la que se mapeara.
 * @PrimaryGeneratedColumn: Define la columna como clave primaria y autoincrementable.
 * @Column: Define una columna en la tabla.
 * @CreateDateColumn: Define una columna de tipo fecha que se actualizara automaticamente con la fecha de creacion.
 * @UpdateDateColumn: Define una columna de tipo fecha que se actualizara automaticamente con la fecha de actualizacion.
 * @ManyToOne: Define una relacion de muchos a uno con otra entidad.
 * @OneToMany: Define una relacion de uno a muchos con otra entidad.
 * @ManyToMany: Define una relacion de muchos a muchos con otra entidad.
 * @JoinTable: Define la tabla intermedia para la relacion muchos a muchos.
 * @JoinColumn: Define la columna que se utilizara para la relacion. *
 */

@Entity({ name: 'post' })
export class Posting {
  @PrimaryGeneratedColumn()
  id: number;

  @CreateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  createAt: Date;

  @Column({ type: 'varchar', length: 50 })
  title: string;

  @Column({ type: 'text' })
  content: string;

  @Column({ type: 'varchar', length: 100 })
  img: string;

  @ManyToMany(() => Categories)
  @JoinTable()
  categories: Categories[];

  @ManyToOne(() => Users)
  user: Users;

  @ManyToMany(() => Tags)
  @JoinTable()
  tags: Tags[];
}
