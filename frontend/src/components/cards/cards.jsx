import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import './cards.css';
import { useSelector, useDispatch } from 'react-redux';
import { addItemsToCart } from '../../redux/actions/cartActions';

import { Link, useNavigate } from 'react-router-dom';

const Cards = ({ product }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const addToCartHandler = (product) => {
    dispatch(addItemsToCart(product._id, 1));
    navigate('/cart');
  };
  return (
    <div className="cardDiv">
      <Card>
        <Link to={`/product/${product._id}`}>
          <img
            src={product.images[0].url}
            className="card-img card-img-top"
            alt={product.name}
          />
        </Link>
        <Card.Body>
          <Link to={`/product/${product._id}`}>
            <Card.Title>{product.name}</Card.Title>
          </Link>
          {/* <Rating rating={product.rating} numReviews={product.numReviews} /> */}
          <Card.Text>${product.price}</Card.Text>
          {product.countInStock === 0 ? (
            <Button variant="light" disabled>
              Out of stock
            </Button>
          ) : (
            <Button onClick={() => addToCartHandler(product)}>
              Add to cart
            </Button>
          )}
        </Card.Body>
      </Card>
    </div>
  );
};

export default Cards;
