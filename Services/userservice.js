const knex = require("knex")({
  client: "mysql2",
  connection: {
    host: process.env.DB_HOST,
    port: 3306,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
  },
});

function editName(id, newName) {
  knex("users").where("id", "=", id).update({ name: newName });
}

function editEmail(id, newEmail) {
  knex("users").where("id", "=", id).update({ email: newEmail });
}

async function userByemail(email) {
  const users = JSON.parse(
    JSON.stringify(await knex.select().table("users").where("email", email))
  );
  return users;
}

async function PutUser(id, city, street, state, zipcode, phone) {
  await knex("address").where("address.user_id", "=", id).update({
    city: city,
    street: street,
    state: state,
    zipcode: zipcode,
    phone: phone,
  });

  return;
}

async function addUser(user) {
  console.log(user.name);
  console.log(user.email);
  console.log(user.password);
  console.log(user.salt);
  return knex("users").insert({
    name: user.name,
    email: user.email,
    password: user.password,
    salt: user.salt,
  });
}
module.exports = {
  PutUser,
  addUser,
  userByemail,
};
