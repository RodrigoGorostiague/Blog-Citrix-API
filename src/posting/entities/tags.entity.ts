import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Posting } from './posts.entity';

@Entity({ name: 'tags' })
export class Tags {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 100 })
  name: string;

  @Column({ type: 'text' })
  description: string;

  @ManyToMany(() => Posting, (posting) => posting.tags)
  @JoinTable()
  posts: Posting[];
}
