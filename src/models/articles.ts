import { Article } from './article';

export interface Articles {
  contents: Article[];
  totalCount: number;
  offset: number;
  limit: number;
}

export const initialArticles: Articles = {
  contents: [],
  totalCount: 0,
  offset: 0,
  limit: 0,
};
