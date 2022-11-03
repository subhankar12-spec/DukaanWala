import React, { useEffect } from 'react';
import PrimarySearchAppBar from '../components/navbar/Navbar';
import Footer from '../components/footer/Footer';
import Banner from '../components/banner/banner';
import Cards from '../components/cards/cards';

import { useSelector, useDispatch } from 'react-redux'; // hooks
import { getProducts as getAllProducts } from '../redux/actions/productActions';

const HomeScreen = () => {
  const getProducts = useSelector((state) => state.getProducts);

  const { products } = getProducts;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllProducts());
  }, [dispatch]);
  return (
    <>
      <PrimarySearchAppBar />
      <Banner />
      <Cards products={products} />
      <Footer />
    </>
  );
};

export default HomeScreen;
