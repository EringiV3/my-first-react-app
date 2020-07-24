import React, { FC, useState, useEffect } from 'react';
import { Article, ImageUrl } from '../../models/article';
import { ARTICLES_PATH, API_KEY } from '../../config/constants';

type ClothProps = { id: string };
const Cloth: FC<ClothProps> = ({ id }) => {
  const initialImageUrl: ImageUrl = { url: '' };
  const initialArticle: Article = {
    id: '',
    createdAt: '',
    updatedAt: '',
    publishedAt: '',
    name: '',
    brand: '',
    largeCategory: '',
    smallCategory: '',
    description: '',
    imageUrlPc: initialImageUrl,
    imageUrlSp: initialImageUrl,
  };

  const [error, setError] = useState<{ message: string } | null>(null);
  const [isLoaded, setIsLoaded] = useState<Boolean>(false);
  const [article, setArticle] = useState<Article>(initialArticle);

  useEffect(() => {
    fetch(`${ARTICLES_PATH}/${id}`, {
      headers: { 'X-API-KEY': API_KEY },
    })
      .then((res) => res.json())
      .then(
        (result) => {
          console.log({ result });
          setIsLoaded(true);
          setArticle(result);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
          console.log({ error }, typeof error);
        }
      );
  }, [id]);

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <>
        <div>title: {article.name}</div>
      </>
    );
  }
};

export default Cloth;
