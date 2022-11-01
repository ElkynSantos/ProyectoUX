const  ProductsServices = require('../Services/products');



async function getProducts(req,res){

    const {limit, offset}=req.query;
   
    const products=await ProductsServices.getProducts(limit,offset);
    
    res.send(products);

}

async function searchProduct(req,res){

    const {name}=req.query;
   
    const products=await ProductsServices.searchProduct(name);
    
    res.send(products);

}



module.exports={
getProducts,
searchProduct


};