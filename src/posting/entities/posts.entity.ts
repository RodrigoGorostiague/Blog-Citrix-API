import { Users } from 'src/users/entities/users.entity';
import { Categories } from './categories.entity';
import { Tags } from './tags.entity';

export class Posting {
  id: number;
  createAt: Date;
  title: string;
  content: string;
  img: string;
  categories: Categories[];
  user: Users;
  tags: Tags[];
}
