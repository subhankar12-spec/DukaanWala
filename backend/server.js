const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const dbConnection = require('./database/db');
const errorMiddleware = require('./middleware/error');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');

const app = express();
app.use(cookieParser());
// app.use(bodyParser.urlencoded({ extended: true }));

//Routes
const products = require('./routes/productRoutes');
const users = require('./routes/userRoutes');

app.use(express.json());
dotenv.config({ path: './config/configurations.env' });

// app.use(cors());

app.listen(process.env.PORT, () => {
  console.log(`Server is working on http://localhost:${process.env.PORT}`);
});

dbConnection();

app.use('/', products);
app.use('/', users);
app.use(errorMiddleware);
