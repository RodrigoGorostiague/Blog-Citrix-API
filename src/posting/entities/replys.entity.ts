import { Users } from 'src/users/entities/users.entity';
import { Posting } from './posts.entity';

export class Replys {
  id: number;
  createAt: Date;
  title: string;
  content: string;
  img: string;
  updateAt: Date;
  post: Posting;
  user: Users;
}
