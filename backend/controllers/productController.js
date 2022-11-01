const Product = require('../models/productModel');

//add new product(Admin)
exports.addProduct = async (req, res) => {
  const product = await Product.create(req.body);

  res.status(201).json({
    success: true,
    product,
  });
};

//See all product
exports.getAllProducts = async (req, res) => {
  const product = await Product.find();
  res.status(200).json({
    success: true,
    product,
  });
};

//Get One particular Product
exports.getProductDetails = async (req, res, next) => {
  const product = await Product.findById(req.params.id);

  if (!product) {
    return next(new ErrorHandler('Product not found', 404));
  }

  res.status(200).json({
    success: true,
    product,
  });
};
