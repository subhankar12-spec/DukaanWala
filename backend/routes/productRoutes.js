const express = require('express');
const {
  getAllProducts,
  addProduct,
} = require('../controllers/productController');

const router = express.Router();

router.get('/products', getAllProducts);
router.post('/products/new', addProduct);

module.exports = router;
