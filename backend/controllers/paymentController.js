const crypto = require('crypto');
const Payment = require('../models/paymentModel');
const Razorpay = require('razorpay');
const dotenv = require('dotenv');
dotenv.config({ path: './config/configurations.env' });
const Order = require('../models/orderModel');
const catchAsyncErrors = require("../middleware/catchAsyncErrors");

module.exports.checkout = async (req, res) => {
  try {
    const instance = new Razorpay({
      key_id: process.env.RAZORPAY_API_KEY,
      key_secret: process.env.RAZORPAY_SECRET_KEY,
    });
    const options = {
      amount: req.body.amount,
      currency: 'INR',
    };
    const order = await instance.orders.create(options);
    if (!order) return res.status(500).send('Some error occured');
    res.send(order);
  } catch (error) {
    res.status(500).send(error);
  }
};

const instance = new Razorpay({
  key_id: process.env.RAZORPAY_API_KEY,
  key_secret: process.env.RAZORPAY_SECRET_KEY,
});

module.exports.paymentVerification = async (req, res) => {
  try {
    const {
      orderItems,
      shippingInfo,
      amount,
      razorpayPaymentId,
      razorpayOrderId,
      razorpaySignature,
    } = req.body;

    const order = await Order.create({
      orderItems,
      shippingInfo,
      user: req.user._id,
      // paymentInfo,
      // itemsPrice,
      // taxPrice,
      // shippingPrice,
      amount: amount / 100,
      // paidAt: Date.now(),

      razorpay: {
        orderId: razorpayOrderId,
        paymentId: razorpayPaymentId,
        signature: razorpaySignature,
      },
    });

    res.status(201).json({
      msg: 'Payment was successfull',
      success: true,
      order,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
};
