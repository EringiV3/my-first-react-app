import React, { FC } from 'react';
import { Article } from '../../models/article';
import { Link } from 'react-router-dom';

type ClothCardProps = { article: Article };
const ClothCard: FC<ClothCardProps> = ({ article }) => {
  return (
    <li>
      <Link to={`/clothes/${article.id}`}>
        <div>{article.name}</div>
        <div>{article.brand}</div>
        <div>{article.largeCategory}</div>
        <div>{article.smallCategory}</div>
        <img src={article.imageUrlPc.url} alt="" />
      </Link>
    </li>
  );
};

export default ClothCard;
