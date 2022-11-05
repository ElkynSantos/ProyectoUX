express = require("express");

const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());
app.use(express.json());


const ProductsRouter=require("./Routes/productRoute");

app.use('/products', ProductsRouter);


/*
app.use("/users", addUserRouter);
app.use("/login", loginRouter);
app.use("/edit-password", editPasswordRouter);
app.use("/edit-email", editEmailRouter);
app.use("/edit-name", editNameRouter);
*/

 app.listen(3000);


//comment