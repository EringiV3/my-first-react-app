import React, { useEffect, useState, FC } from 'react';
import { ARTICLES_PATH, API_KEY } from '../config/constants';
import { Articles } from '../models/articles';
import Cloth from './Cloth';

// 服一覧コンポーネント
const Clothes: FC = () => {
  const initialArticles: Articles = {
    contents: [],
    totalCount: 0,
    offset: 0,
    limit: 0,
  };
  const [error, setError] = useState<{ message: string } | null>(null);
  const [isLoaded, setIsLoaded] = useState<Boolean>(false);
  const [articles, setArticles] = useState<Articles>(initialArticles);

  useEffect(() => {
    fetch(ARTICLES_PATH, {
      headers: { 'X-API-KEY': API_KEY },
    })
      .then((res) => res.json())
      .then(
        (result) => {
          console.log({ result });
          setIsLoaded(true);
          setArticles(result);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
          console.log({ error }, typeof error);
        }
      );
  }, []);

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <ul>
        {articles.contents.map((article) => (
          <Cloth key={article.id} article={article} />
        ))}
      </ul>
    );
  }
};

export default Clothes;
