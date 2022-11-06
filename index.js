express = require("express");


const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());
app.use(express.json());


const PORT = 3000;

const ProductsRouter=require("./Routes/productRoute");

const userRouter=require("./Routes/usersrouter");

app.use('/products', ProductsRouter);

app.use('/products',ProductsRouter);

app.use("/users",userRouter);


app.listen(3000);


  
//comment