const express = require('express');

// app.get('/api/keys/paypal', (req, res) => {
//   res.send(process.env.PAYPAL_CLIENT_ID || 'sb');
// });
const {
  checkout,
  paymentVerification,
} = require('../controllers/paymentController.js');

const router = express.Router();

router.route('/checkout').post(checkout);

router.route('/paymentverification').post(paymentVerification);

router
  .route('/getkey')
  .get((req, res) =>
    res.status(200).json({ key: process.env.RAZORPAY_API_KEY })
  );

module.exports = router;
