const userServices = require("../Services/userservice");

const { isDecimal } = require("../utils/validator");
const { IsEmail } = require("../utils/validator");

const crypto = require("crypto");
const jwt = require("jsonwebtoken");
const {
  successResponse,
  badRequestResponse,
} = require("../utils/responseBuilder");

async function PutUser(req, res) {
  try {
    const { id, name, email } = req.body;
    const errorMessages = [];
    if (!id || !name || !email) {
      errorMessages.push("Parameter Need is required");
    }
    if (isDecimal(id)) {
      errorMessages.push("Parameter Integer is required");
    }

    if (typeof name !== "string") {
      errorMessages.push("Error with type paramater");
    }
    if (errorMessages.length) {
      res.status(400).send(badRequestResponse(errorMessages));
    } else {
      await userServices.PutUser(id, name, email);
      res.status(200).send("Change");
    }
  } catch (exception) {
    res.status(500).send("internal server error");
  }
}

async function addUser(req, res) {
  const { name, email, password } = req.body;

  const { salt, encryptedPassword } = encryptPassword(password);

  const newUser = req.body;
  newUser.password = encryptedPassword;
  newUser.salt = salt;

  const user = userServices.addUser(newUser);
  res.send(successResponse(user));
}

function encryptPassword(
  password,
  salt = crypto.randomBytes(128).toString("base64")
) {
  const encryptedPassword = crypto
    .pbkdf2Sync(
      password,
      salt,
      parseInt(process.env.HASH_ITERATIONS),
      parseInt(process.env.KEY_LENGTH),
      "sha256"
    )
    .toString("base64");

  return { salt, encryptedPassword };
}

async function loginuser(req, res) {
  const { email, password } = req.body;

  let user = await userServices.userByemail(email);

  if (user) {
    user = user[0];
    const userEncryptedDetails = encryptPassword(password, user.salt);
    if (userEncryptedDetails.encryptedPassword === user.password) {
      const accessToken = jwt.sign(
        {
          email: user.email,
          name: user.name,
        },
        process.env.ACCESS_TOKEN_SECRET,
        {
          expiresIn: "1h",
        }
      );

      const refreshToken = jwt.sign(
        {
          email: user.email,
        },
        process.env.REFRESH_TOKEN_SECRET,
        {
          expiresIn: "30d",
        }
      );

      res.send({
        accessToken,
        refreshToken,
      });
    } else {
      res.status(401).send({});
    }
  } else {
    res.status(404).send("Email does not exist");
  }
}

module.exports = {
  PutUser,
  addUser,
  loginuser,
};
