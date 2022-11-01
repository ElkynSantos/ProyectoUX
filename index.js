const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());


const ProductsRouter=require("./Routes/productRoute");

app.use('/products', ProductsRouter);

app.use('/products',ProductsRouter);


app.listen(3000);
