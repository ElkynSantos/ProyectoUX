const express = require("express");
const { addressController } = require("../Controllers/address.controller");

const addressRouter = express.Router();

addressRouter.get("/", addressController);

module.exports = addressRouter;





const express = require("express");
const { changeInfo } = require("../Controllers/info.controller");

const changeInfoRouter = express.Router();

changeInfoRouter.put("/change-info", changeInfo);

module.exports = changeInfoRouter;





const express = require("express");
const { resetPassword } = require("../Controllers/password.controller");

const resetPasswordRouter = express.Router();

resetPasswordRouter.put("/reset-password", resetPassword);

module.exports = resetPasswordRouter;
