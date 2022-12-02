const express = require("express");

const routerU = express.Router();

const userController = require("../Controllers/usercontrol");

routerU.put("/", userController.PutUser);
routerU.post("/REGISTER", userController.addUser);
routerU.post("/LOGIN", userController.loginuser);

module.exports = routerU;
