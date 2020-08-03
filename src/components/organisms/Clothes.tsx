import React, { useEffect, useState, FC } from 'react';
import { ARTICLES_PATH, API_KEY } from '../../config/constants';
import { Articles, initialArticles } from '../../models/articles';
import ClothCard from '../molecule/ClothCard';

// 服一覧コンポーネント
type clothesProps = { largeCategory: string; smallCategory: string };
const Clothes: FC<clothesProps> = ({ largeCategory, smallCategory }) => {
  const [error, setError] = useState<{ message: string } | null>(null);
  const [isLoaded, setIsLoaded] = useState<Boolean>(false);
  const [articles, setArticles] = useState<Articles>(initialArticles);

  const buildQuery = (): string => {
    let query: string =
      largeCategory !== ''
        ? `filters=largeCategory[equals]${largeCategory}`
        : '';
    query +=
      smallCategory !== '' ? `[and]smallCategory[equals]${smallCategory}` : '';
    return query;
  };

  useEffect(() => {
    const query = buildQuery();
    fetch(`${ARTICLES_PATH}?${query}`, {
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
    // eslint-disable-next-line
  }, [largeCategory, smallCategory]);

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return articles.contents.length === 0 ? (
      <div>検索条件に一致するコンテンツがありません</div>
    ) : (
      <ul>
        {articles.contents.map((article) => (
          <ClothCard key={article.id} article={article} />
        ))}
      </ul>
    );
  }
};

export default Clothes;
