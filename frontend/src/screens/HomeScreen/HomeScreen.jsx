import React, { useEffect } from 'react';

import Banner from '../../components/banner/banner';
import Cards from '../../components/cards/cards';
import Spinner from '../../components/spinner/Spinner';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './HomeScreen.css';

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
          <div>
            <h5 className="text-center featureText">All Featured Products</h5>
          </div>
          <div className="products">
            {/* {loading ? (
              <LoadingBox />
            ) : error ? (
              <MessageBox variant="danger">{error}</MessageBox>
            ) : ( */}
            <Row>
              {products.map((product) => (
                <Col key={product._id} sm={6} md={4} lg={4} className="mb-3">
                  <Cards product={product} />
                </Col>
              ))}
            </Row>
            {/* {products.map((product) => (
              <Cards product={product} />
            ))}

            {/* )} */}
          </div>
        </>
      )}
    </>
  );
};

export default HomeScreen;
