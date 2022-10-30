import React from 'react';
import PrimarySearchAppBar from '../components/navbar/navbar';
import Footer from '../components/footer/Footer';
import  Banner from '../components/banner/banner';
import Cards from '../components/cards/cards';

const HomeScreen = () => {
  return (
    <>
      <PrimarySearchAppBar />
      <Banner />
      <Cards />
      <Footer />
    </>
  );
};

export default HomeScreen;
