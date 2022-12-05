express = require("express");
var cors = require("cors");

const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.json());
app.use(express.json());
app.use(cors());

require("dotenv").config();

const PORT = 3001;

const ProductsRouter = require("./Routes/productRoute");
const usersrouter = require("./Routes/usersrouter");

app.use("/products", ProductsRouter);

app.use("/products", ProductsRouter);
app.use("/users", usersrouter);

// app.listen(3000);

app.listen(PORT, () => {
  console.log(`app is listening to port ${PORT}`);
});

//comment
