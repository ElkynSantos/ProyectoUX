const express = require("express");

const routerU= express.Router();

const userController=require("../Controllers/usercontrol");

routerU.put('/',userController.PutUser);


module.exports=routerU;