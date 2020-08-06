import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Articles, initialArticles } from '../../models/articles';
import { ARTICLES_PATH, API_KEY } from '../../config/constants';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, A11y } from 'swiper';
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';

SwiperCore.use([Navigation, Pagination, A11y]);

// トップページ　コンポーネント
const Home: () => JSX.Element = () => {
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
      <>
        <Swiper
          loop={true}
          spaceBetween={50}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          onSlideChange={() => console.log('slide change')}
          onSwiper={(swiper) => console.log(swiper)}
        >
          {articles.contents.map((article, index) => (
            <SwiperSlide key={index}>
              <Link to={`/clothes/${article.id}`}>
                <img width="100%" src={article.imageUrlPc.url} alt="" />
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
        <div>
          <Link to="/clothes">一覧へ→</Link>
        </div>
      </>
    );
  }
};

export default Home;
