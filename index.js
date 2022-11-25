express = require("express");
const {
  addUserRouter,
  loginRouter,
  editPasswordRouter,
  editEmailRouter,
  editNameRouter,
} = require("./Routes/usersrouter");

const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.json());
app.use(express.json());

require("dotenv").config();

const PORT = 3000;

//const ProductsRouter=require("./Routes/productRoute");

//app.use('/products', ProductsRouter);

//app.use('/products',ProductsRouter);

app.use("/users", addUserRouter);
app.use("/login", loginRouter);
app.use("/edit-password", editPasswordRouter);
app.use("/edit-email", editEmailRouter);
app.use("/edit-name", editNameRouter);

// app.listen(3000);

app.listen(PORT, () => {
  console.log(`app is listening to port ${PORT}`);
});

//comment
