import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Posting } from './posts.entity';

@Entity({ name: 'categories' })
export class Categories {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 100 })
  name: string;

  @Column({ type: 'text' })
  description: string;

  @ManyToMany(() => Posting, (posting) => posting.categories)
  @JoinTable()
  posts: Posting[];
}
