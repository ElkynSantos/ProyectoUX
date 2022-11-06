const knex = require('knex')({
  client: 'mysql',
  connection: {
      host: '127.0.0.1',
      port: 3306,
      user: 'proyectoux',
      password: 'reina2000',
      database: 'ecomm'
  }
});

function editName(id,newName) { knex("users").where("id", "=", id).update({ name: newName })}


function editEmail(id,newEmail) { knex("users").where("id", "=", id).update({ email: newEmail })}


async function PutUser(id,Newname,Newemail){
 await knex('users').where('id','=',id).update({
   name: Newname,
    email: Newemail
 });

return;
}

module.exports={
  PutUser
};
/*
function addUser(req, res) {
  const { email, name, password, salt } = req.body;
    try {
    knex.Select("users")
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

function login(req, res) {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).json("incorrect form of submission");
  }
  try {
    knex.Select("users")
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

function editPassword(req, res) {
  const { email, password } = req.body;
  try {
     knex.Select("users")
      .where("email", "=", email)
      .update({ password: password })
      .then(function (result) {
        res.json({ success: true, message: "updated password" }); // respond back to request
      });
  } catch {
    console.error("error");
  }
}
*/

