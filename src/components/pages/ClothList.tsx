import React from 'react';
import Header from '../organisms/Header';
import Footer from '../organisms/Footer';
import ClothSearchResults from '../templates/ClothSearchResults';
import { useLocation } from 'react-router-dom';

type LocationState = {
  searchWord: string;
};
const ClothList = () => {
  const location = useLocation<LocationState>();
  const searchWord =
    location.state === undefined ? '' : location.state.searchWord;
  return (
    <>
      <Header />
      <ClothSearchResults searchWord={searchWord} />
      <Footer />
    </>
  );
};

export default ClothList;
