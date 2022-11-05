const express = require("express");
const db = require("../Services/products");
const {
  addUser,
  editPassword,
  editEmail,
  editName,
  login,
} = require("../Controllers/usercontrol");

const addUserRouter = express.Router();
const editPasswordRouter = express.Router();
const editEmailRouter = express.Router();
const editNameRouter = express.Router();
const loginRouter = express.Router();

addUserRouter.post("/", (req, res) => {
  addUser(req, res, db);
});

editPasswordRouter.put("/", (req, res) => {
  editPassword(req, res, db);
});

editEmailRouter.put("/", (req, res) => {
  editEmail(req, res, db); 
});

editNameRouter.put("/", (req, res) => {
  editName(req, res, db); 
});

loginRouter.post("/", (req, res) => {
  login(req, res, db); 
});

module.exports = {
  addUserRouter: addUserRouter,
  editPasswordRouter: editPasswordRouter,
  editEmailRouter: editEmailRouter,
  editNameRouter: editNameRouter,
  loginRouter: loginRouter,
};
