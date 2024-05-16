import { Posting } from './posts.entity';

export class Tags {
  id: number;
  name: string;
  description: string;
  posts: Posting[];
}
