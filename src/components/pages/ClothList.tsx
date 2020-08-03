import React from 'react';
import Header from '../organisms/Header';
import Footer from '../organisms/Footer';
import ClothSearchResults from '../templates/ClothSearchResults';

const ClothList = () => {
  return (
    <>
      <Header />
      <ClothSearchResults />
      <Footer />
    </>
  );
};

export default ClothList;
