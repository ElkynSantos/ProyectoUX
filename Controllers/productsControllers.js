const  ProductsServices = require('../Services/products');



async function getProducts(_,res){
    const products=await ProductsServices.getProducts();
    
    res.send(products);

}


module.exports={
getProducts

};