import React from 'react';
import {
  Box,
  Card,
  CardContent,
  Typography,
  CardMedia,
  Grid,
} from '@mui/material';
import { styled } from '@mui/material';
import { bannerData } from '../../constants/data';

const CardBox = styled(Box)`
  margin-left: 8%;
  margin-top: 3%;
  display: flex;
  flex-dirction: row;
  color: #ffffff;
  text-decoration: none;
`;

const Cards = ({ products }) => {
  return (
    <>
      <Grid container spacing={3}>
        {products.map((product) => (
          <Grid item xs={3}>
            {/* <CardBox sx={{ width: '300px', height: '300px' }}> */}
            <Card>
              <CardMedia
                component="img"
                height="140"
                image={product.images[0].url}
              />
              <CardContent>
                <Typography>{product.name}</Typography>
                <Typography>Hello</Typography>
                <Typography>Hello</Typography>
              </CardContent>
            </Card>
            {/* </CardBox> */}
          </Grid>
        ))}
        {/* <CardBox sx={{ width: '300px' }}>
      <Card>
        <CardMedia component='img' height='140' image='data:image/jpeg;base64,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'/>
        <CardContent>
          <Typography>Hello</Typography>
          <Typography>Hello</Typography>
          <Typography>Hello</Typography>
        </CardContent>
      </Card>
     
    </CardBox> */}
      </Grid>
    </>
  );
};

export default Cards;
