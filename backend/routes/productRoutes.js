const express = require('express');
const {
  getAllProducts,
  addProduct,
  getProductDetails,
} = require('../controllers/productController');
const { isAuthenticatedUser, authorizeRoles } = require('../middleware/auth');

const router = express.Router();

router.get('/products', getAllProducts);
router.get('/product/:id', getProductDetails);

router.post('/products/new', addProduct);

module.exports = router;
