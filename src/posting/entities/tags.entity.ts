import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { Posting } from './posts.entity';

@Entity({ name: 'tags' })
export class Tags {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 100 })
  name: string;

  @Column({ type: 'text' })
  description: string;

  posts: Posting[];
}
