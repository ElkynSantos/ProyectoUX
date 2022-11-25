const ProductsServices = require("../Services/products");
const {
  successResponse,
  badRequestResponse,
} = require("../utils/responseBuilder");
const { IsString } = require("../utils/validator");
// const address = require("../utils/address");

const { isDecimal } = require("../utils/validator");
async function getProducts(req, res) {
  const { limit, offset } = req.query;

  const errorMessages = [];
  if (!limit && !offset) {
    errorMessages.push("Parameter Need is required");
  }
  if (isDecimal(limit) || isDecimal(offset)) {
    errorMessages.push("Parameter Integer is required");
  }

  if (errorMessages.length) {
    res.status(400).send(errorMessages);
  } else {
    const products = await ProductsServices.getProducts(limit, offset);
    res.send(products);
  }
}

async function searchProduct(req, res) {
  try {
    const { name, brands, categories } = req.query;
    const errorMessages = [];

    if (typeof name !== "string") {
      errorMessages.push("name is not string");
    }

    if (errorMessages.length) {
      console.log("entro");

      res.status(400).send(badRequestResponse(errorMessages));
    } else {
      const products = await ProductsServices.searchProduct(
        name,
        brands,
        categories
      );

      res.status(200).send(products);
    }
  } catch (exception) {
    return;
  }
}

module.exports = {
  getProducts,
  searchProduct,
};
