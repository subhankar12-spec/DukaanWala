const express = require('express');
const dotenv = require('dotenv');
const dbConnection = require('./database/db');

const app = express();
app.use(express.json());
dotenv.config({ path: './config/configurations.env' });

//Routes
const products = require('./routes/productRoutes');

// app.get('/', (req, res) => {
//   res.send('This is Test');
// });

app.listen(process.env.PORT, () => {
  console.log(`Server is working on http://localhost:${process.env.PORT}`);
});

dbConnection();

app.use('/', products);
