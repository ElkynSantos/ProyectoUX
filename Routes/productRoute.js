const express = require("express");
const router = express.Router();

const ProductsController=require("../Controllers/productsControllers");

router.get('/',ProductsController.getProducts);

router.get('/search',ProductsController.searchProduct);

module.exports=router;