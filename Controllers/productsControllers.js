const  ProductsServices = require('../Services/products');



async function getProducts(req,res){

    const {limit, offset}=req.query;
   
    const products=await ProductsServices.getProducts(limit,offset);
    
    res.send(products);

}


module.exports={
getProducts

};