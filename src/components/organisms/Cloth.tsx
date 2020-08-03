import React, { FC, useState, useEffect } from 'react';
import { Article, initialArticle } from '../../models/article';
import { ARTICLES_PATH, API_KEY } from '../../config/constants';

type ClothProps = { id: string };
const Cloth: FC<ClothProps> = ({ id }) => {
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
    console.log({ article });
    return (
      <>
        <div>title: {article.name}</div>
        <div>largeCategory: {article.largeCategory}</div>
        <div>smallCategory: {article.smallCategory}</div>
        <div>brand: {article.brand}</div>
        <div>brand: {article.brand}</div>
        <div>description: {article.description}</div>
        <img src={article.imageUrlPc.url} alt="" />
      </>
    );
  }
};

export default Cloth;
