const express = require('express');

// app.get('/api/keys/paypal', (req, res) => {
//   res.send(process.env.PAYPAL_CLIENT_ID || 'sb');
// });
const {
  checkout,
  paymentVerification,
} = require('../controllers/paymentController.js');

const router = express.Router();

router.route('/create-order').post(checkout);

router.route('/pay-order').post(paymentVerification);

router
  .route('/get-razorpay-key')
  .get((req, res) =>
    res.status(200).json({ key: process.env.RAZORPAY_API_KEY })
  );

module.exports = router;
