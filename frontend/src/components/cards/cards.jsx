import React from 'react';

import Button from 'react-bootstrap/Button';
import './cards.css';
import { useSelector, useDispatch } from 'react-redux';
import { addItemsToCart } from '../../redux/actions/cartActions';

import { Link, useNavigate } from 'react-router-dom';
import { Box, Typography, Grid, Paper, styled } from '@mui/material';

const Cards = ({ product }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const addToCartHandler = (product) => {
    dispatch(addItemsToCart(product._id, 1));
    navigate('/cart');
  };

  const FlexBox = styled(Box)`
    display: flex;
    justify-content: space-between;
    padding: 2px;
  `;

  return (
    <>
      <Grid item xs={12} sm={6} md={4} sx={{ p: 2 }}>
        <Link to={`/product/${product._id}`} style={{ textDecoration: 'none' }}>
          <Paper elevation={12}>
            <Typography
              gutterBottom
              variant="h6"
              component="div"
              sx={{ textAlign: 'center' }}
            >
              <b> {product.name}</b>
            </Typography>

            {/* <CardMedia
            component="img"
            image={product.imageURL}
            height="120"
            alt={product.name}
          /> */}
            <Box sx={{ display: 'flex', allignItems: 'center' }}>
              <img
                src={product.images[0].url}
                alt={product.name}
                style={{
                  // maxWidth: '100%',

                  marginLeft: 'auto',
                  marginRight: 'auto',
                }}
              />
            </Box>

            <FlexBox>
              <Typography gutterBottom variant="h6" component="div">
                <b> Rs: {product.price}</b>
              </Typography>

              <Button
                size="small"
                variant="contained"
                onClick={() => addToCartHandler(product)}
              >
                Add to cart
              </Button>
            </FlexBox>
          </Paper>
        </Link>
      </Grid>

      {/* <Card>
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
      </Card> */}
    </>
  );
};

export default Cards;
