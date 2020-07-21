import { Article } from './article';

export interface Articles {
  contents: Article[];
  totalCount: number;
  offset: number;
  limit: number;
}
