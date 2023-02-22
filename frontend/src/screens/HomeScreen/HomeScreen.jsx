import React, { useEffect } from 'react';

import Banner from '../../components/banner/banner';
import Cards from '../../components/cards/cards';
import Spinner from '../../components/spinner/Spinner';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './HomeScreen.css';
import { Box, Typography, Grid } from '@mui/material';

import { useSelector, useDispatch } from 'react-redux'; // hooks
import { getProducts as getAllProducts } from '../../redux/actions/productActions';

const HomeScreen = () => {
  const getProducts = useSelector((state) => state.getProducts);

  const { products, loading } = getProducts;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllProducts());
  }, [dispatch]);
  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        <>
          <Banner />
          <Box sx={{ display: 'flex', justifyContent: 'center', p: 3 }}>
            <Typography variant="h6">All Featured Products</Typography>
          </Box>

          <Box sx={{ m: 4 }}>
            <Grid container spacing={4}>
              {products.map((product, key) => (
                <Cards
                  product={product}
                  // addToCartHandler={() => addToCartHandler(product)}
                  loading={loading}
                  key={key}
                />
              ))}
            </Grid>
          </Box>

          {/* <div className="products">
            <Row>
              {products.map((product) => (
                <Col key={product._id} sm={6} md={4} lg={4} className="mb-3">
                  <Cards product={product} />
                </Col>
              ))}
            </Row>
          </div> */}
        </>
      )}
    </>
  );
};

export default HomeScreen;
