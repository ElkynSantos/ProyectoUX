function addUser(req, res, db) {
  const { email, name, password, salt } = req.body;
    try {
    db("users")
      .insert({
        email: email,
        name: name,
        password: password,
        salt: salt,
      })
      .then(() => {
        res.json({ success: true, message: "User added" }); // respond back to request
      });
  } catch {
    console.log("error here");
  }
}

function login(req, res, db) {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).json("incorrect form of submission");
  }
  try {
    db("users")
      .where("email", "=", email)
      .then((dataUser) => {
        if (dataUser[0].password === password) {
          return res.json({ success: true, message: "You are logged in." });
        } else {
          return res.status(400).json("invalid password ");
        }
      })
      .catch((error) => console.log(error));
  } catch (e) {
    return res.status(400).json("invalid credentials ");
  }
}

function editPassword(req, res, db) {
  const { email, password } = req.body;
  try {
    db("users")
      .where("email", "=", email)
      .update({ password: password })
      .then(function (result) {
        res.json({ success: true, message: "updated password" }); // respond back to request
      });
  } catch {
    console.error("error");
  }
}

function editEmail(req, res, db) {
  const { email, newEmail } = req.body;
  try {
    db("users")
      .where("email", "=", email)
      .update({ email: newEmail })
      .then(function (result) {
        res.json({ success: true, message: "updated email" }); // respond back to request
      });
  } catch {
    console.log("error");
  }
}

function editName(req, res, db) {
  const { email, newName } = req.body;
  try {
    db("users")
      .where("email", "=", email)
      .update({ name: newName })
      .then(function (result) {
        res.json({ success: true, message: "updated name" }); // respond back to request
      });
  } catch {
    console.log("error");
  }
}

module.exports = { addUser, editPassword, editEmail, editName, login };
