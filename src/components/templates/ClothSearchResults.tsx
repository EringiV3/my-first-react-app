import React, { FC, useState, useEffect, ChangeEvent } from 'react';
import Clothes from '../organisms/Clothes';
import { ARTICLES_PATH, API_KEY } from '../../config/constants';
import { Articles, initialArticles } from '../../models/articles';

type clothSearchResultsProps = { searchWord: string };
const ClothSearchResults: FC<clothSearchResultsProps> = ({ searchWord }) => {
  const [error, setError] = useState<{ message: string } | null>(null);
  const [isLoaded, setIsLoaded] = useState<Boolean>(false);
  const [articles, setArticles] = useState<Articles>(initialArticles);
  const [largeCategory, setLargeCategory] = useState<string>('');
  const [smallCategory, setSmallCategory] = useState<string>('');

  // FIX ME カテゴリのみ取得時のinterfaceによるプロパティの存在保証が効いていない？
  useEffect(() => {
    fetch(`${ARTICLES_PATH}?fields=largeCategory,smallCategory`, {
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
  console.log({ articles });

  const onChangeLargeCategory = (e: ChangeEvent<HTMLSelectElement>) =>
    setLargeCategory(e.target.value);
  const onChangeSmallCategory = (e: ChangeEvent<HTMLSelectElement>) =>
    setSmallCategory(e.target.value);

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    const largeCategories = articles.contents.map(
      (article) => article.largeCategory
    );
    const smallCategories = articles.contents.map(
      (article) => article.smallCategory
    );
    return (
      <>
        <select
          name="largeCategories"
          id="largeCategoryFilter"
          onChange={onChangeLargeCategory}
          value={largeCategory}
        >
          <option value="">選択してください</option>
          {largeCategories.map((category, index) => (
            <option key={index} value={category}>
              {category}
            </option>
          ))}
        </select>
        <select
          name="smallCategories"
          id="smallCategoryFilter"
          onChange={onChangeSmallCategory}
          value={smallCategory}
        >
          <option value="">選択してください</option>
          {smallCategories.map((category, index) => (
            <option key={index} value={category}>
              {category}
            </option>
          ))}
        </select>
        {/* propsで絞り込みのパラメータを与える */}
        <Clothes
          largeCategory={largeCategory}
          smallCategory={smallCategory}
          searchWord={searchWord}
        />
      </>
    );
  }
};

export default ClothSearchResults;
