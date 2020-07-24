import React, { FC } from 'react';
import { Article } from '../../models/article';

type ClothProps = { article: Article };
const Cloth: FC<ClothProps> = ({ article }) => {
  return (
    <li key={article.id}>
      <div>{article.name}</div>
      <div>{article.brand}</div>
      <div>{article.largeCategory}</div>
      <div>{article.smallCategory}</div>
      <img src={article.imageUrlPc.url} alt="" />
    </li>
  );
};

export default Cloth;
