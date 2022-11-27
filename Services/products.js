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

async function getProducts1(li, off) {
  console.log("entro");
  const Products = JSON.parse(
    JSON.stringify(
      await knex.select("*").from("products").limit(li).offset(off)
    )
  );

  return Products;
}

async function searchProduct(name1, brands, categories) {
  console.log("entro");
  const ProductByName = JSON.parse(
    JSON.stringify(
      await knex
        .select("*")
        .from("products")
        .join("brands", "brands.id_B", "=", "products.brand_id")
        .join("categories", "id_C", "=", "products.category_id")
        .where("products.name_P", "Like", "%" + name1 + "%")
        .where("brands.nameB", "Like", "%" + brands + "%")
        .where("categories.nameC", "Like", "%" + categories + "%")
    )
  );

  return ProductByName;
}

module.exports = {
  getProducts1,
  searchProduct,
};
