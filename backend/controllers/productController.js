const Product = require('../models/productModel');
const catchAsyncErrors = require('../middleware/catchAsyncErrors');
const ErrorHander = require('../utils/errorHandler');
const cloudinary = require('cloudinary');

//add new product(Admin)
exports.addProduct = catchAsyncErrors(async (req, res, next) => {
  let images = [];
  // console.log(req.body);
  if (typeof req.body.images === 'string') {
    images.push(req.body.images);
  } else {
    images = req.body.images;
  }
  // console.log(images.length);
  const imagesLinks = [];

  for (let i = 0; i < images.length; i++) {
    const result = await cloudinary.v2.uploader.upload(images[i], {
      folder: 'Dukaanwala/Products',
    });
    console.log('result', result);

    imagesLinks.push({
      public_id: result.public_id,
      url: result.secure_url,
    });
  }
  // console.log('4');

  req.body.images = imagesLinks;
  // // req.body.user = req.user.id;

  const product = await Product.create(req.body);

  res.status(201).json({
    success: true,
    product,
  });
});

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
