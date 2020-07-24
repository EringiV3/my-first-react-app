import React, { FC } from 'react';
import Header from '../organisms/Header';
import Footer from '../organisms/Footer';
import Cloth from '../organisms/Cloth';
import { RouteComponentProps } from 'react-router-dom';

type ClothDetailProps = RouteComponentProps<{ id: string }>;

const ClothDetail: FC<ClothDetailProps> = ({ match }) => {
  return (
    <>
      <Header />
      <Cloth id={match.params.id} />
      <Footer />
    </>
  );
};

export default ClothDetail;
