const knex = require('knex')({
    client: 'mysql',
    connection: {
        host: '127.0.0.1',
        port: 3306,
        user: 'LourdesSantos',
        password: 'Reina2000',
        database: 'ecomm'
    }
});


async function getProducts(){

    const Products= JSON.parse(JSON.stringify(
        await knex.select().table('products'))
    );

return Products;

}

module.exports={
    getProducts

};