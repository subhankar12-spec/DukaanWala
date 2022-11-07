import React, { useEffect } from 'react';
import { Box } from '@mui/material';
import { bannerData } from '../../constants/data';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getProductDetails } from '../../redux/actions/productActions';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import ListGroup from 'react-bootstrap/ListGroup';

const ProductScreen = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { loading, product } = useSelector((state) => state.getProductDetails);

  useEffect(() => {
    dispatch(getProductDetails(id));
  }, []);

  return (
    // <div>Hello</div>
    <div>
      {product && Object.keys(product).length && (
        <div>
          <Row>
            <Col md={6}>
              <img
                className="img-large"
                src={product.images[0].url}
                alt={product.name}
              ></img>
            </Col>
            <Col md={3}>
              <ListGroup variant="flush">
                <ListGroup.Item>
                  {/* <Helmet>
                    <title>{product.name}</title>
                  </Helmet> */}
                  <h1>{product.name}</h1>
                </ListGroup.Item>
                <ListGroup.Item>
                  {/* <Rating
                    rating={product.rating}
                    numReviews={product.numReviews}
                  ></Rating> */}
                </ListGroup.Item>
                <ListGroup.Item>Pirce : ${product.price}</ListGroup.Item>
                <ListGroup.Item>
                  {/* <Row xs={1} md={2} className="g-2">
                    {[product.image, ...product.images].map((x) => (
                      <Col key={x}>
                        <Card>
                          <Button
                            className="thumbnail"
                            type="button"
                            variant="light"
                      
                          >
                            <Card.Img variant="top" src={x} alt="product" />
                          </Button>
                        </Card>
                      </Col>
                    ))}
                  </Row> */}
                </ListGroup.Item>
                <ListGroup.Item>
                  Description:
                  <p>{product.description}</p>
                </ListGroup.Item>
              </ListGroup>
            </Col>
            <Col md={3}>
              <Card>
                <Card.Body>
                  <ListGroup variant="flush">
                    <ListGroup.Item>
                      <Row>
                        <Col>Price:</Col>
                        <Col>${product.price}</Col>
                      </Row>
                    </ListGroup.Item>
                    <ListGroup.Item>
                      <Row>
                        <Col>Status:</Col>
                        {/* <Col>
                          {product.countInStock > 0 ? (
                            <Badge bg="success">In Stock</Badge>
                          ) : (
                            <Badge bg="danger">Unavailable</Badge>
                          )}
                        </Col> */}
                      </Row>
                    </ListGroup.Item>

                    {/* {product.countInStock > 0 && (
                      <ListGroup.Item>
                        <div className="d-grid">
                          <Button onClick={addToCartHandler} variant="primary">
                            Add to Cart
                          </Button>
                        </div>
                      </ListGroup.Item>
                    )} */}
                  </ListGroup>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </div>
      )}
    </div>
  );
};

export default ProductScreen;
