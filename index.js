const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());


const PORT = 3000;

const ProductsRouter=require("./Routes/productRoute");
const addressRouter = require("./Routes/address.router");

app.use('/products', ProductsRouter);

app.use('/products',ProductsRouter);

app.use("/address", addressRouter);

// app.listen(3000);

app.listen(PORT, () => {
    console.log(`app is listening to port ${PORT}`);
  });
  
//comment