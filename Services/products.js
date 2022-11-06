const knex = require('knex')({
    client: 'mysql',
    connection: {
        host: process.env.DB_HOST,
        port: 3306,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_DATABASE
    }
});


async function getProducts(li,off){

    const Products= JSON.parse(JSON.stringify(
        await knex.select("*").from('products').limit(li).offset(off))
    );

return Products;

}

async function searchProduct(name1){

   // console.log(name1);
    const ProductByName=JSON.parse(JSON.stringify(await knex.select("*").from('products')
    .join('brands','brands.id_B','=','products.brand_id')
    .join('categories','id_C','=','products.category_id').whereLike('products.name_P','%'+name1+'%')));

   

return ProductByName;
}


module.exports={
    getProducts,
    searchProduct

};

