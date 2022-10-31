import React from 'react';
import { Box } from '@mui/material';
import { bannerData } from '../constants/data';

const ProductScreen = () => {
  return (
    <Box>
      <img src={bannerData.img} alt="" />
    </Box>
  );
};

export default ProductScreen;
