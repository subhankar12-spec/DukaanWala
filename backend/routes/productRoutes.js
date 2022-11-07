const express = require('express');
const {
  getAllProducts,
  addProduct,
  getProductDetails,
} = require('../controllers/productController');

const router = express.Router();

router.get('/products', getAllProducts);
router.get('/product/:id', getProductDetails);

router.post('/products/new', addProduct);

module.exports = router;
