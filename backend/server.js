const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const dbConnection = require('./database/db');
const errorMiddleware = require('./middleware/error');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const passport = require('passport');
const session = require('cookie-session');
const Razorpay = require('razorpay');
const fileUpload = require('express-fileupload');
const cloudinary = require('cloudinary');

const app = express();
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true, limit: '10mb' }));
app.use(fileUpload());

dotenv.config({ path: './config/configurations.env' });

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
  secure: true,
});
// cloudinary.config({
//   cloud_name: 'dd5fmpv7l',
//   api_key: '461452678931415',
//   api_secret: 'VAETeii-EzMFY_pDZiyZ-OMyNe8',
//   secure: true,
// });

//Routes
const products = require('./routes/productRoutes');
const users = require('./routes/userRoutes');
const googleRoutes = require('./routes/googleRoutes');
const orderRoutes = require('./routes/orderRoutes');
const paymentRoutes = require('./routes/paymentRoutes');

app.use(express.json({ limit: '10mb' }));
app.use(
  session({
    maxAge: 24 * 60 * 60 * 1000,
    keys: ['dnndndndnd'],
  })
);
app.use(passport.initialize());
app.use(passport.session());

// app.use(cors());

app.listen(process.env.PORT, () => {
  console.log(`Server is working on http://localhost:${process.env.PORT}`);
});

dbConnection();

app.use('/', products);
app.use('/', users);
app.use('/', googleRoutes);
app.use('/', googleRoutes);
app.use('/', orderRoutes);
app.use('/', paymentRoutes);

app.use(errorMiddleware);
