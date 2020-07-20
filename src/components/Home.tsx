import React from 'react';
import { Link } from 'react-router-dom';

// トップページ　コンポーネント
const Home: () => JSX.Element = () => {
  return (
    <>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/clothes">Clothes</Link>
        </li>
      </ul>
    </>
  );
};

export default Home;
