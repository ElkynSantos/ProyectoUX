const  ProductsServices = require('../Services/products');
const { successResponse, badRequestResponse } = require("../utils/responseBuilder");
const { IsString } = require("../utils/validator");
const address = require("../utils/address");


async function getProducts(req,res){

    try {
        const {limit, offset}=req.query;
        const errorMessages = [];
        if(!limit && !offset){
            errorMessages.push("Parameter Need is required");
        }
        //*FALTA VALIDACION SI ES DECIMAL.

        if(errorMessages.length){
            res.status(400).send(errorMessages);
        }else{
   
            const products=await ProductsServices.getProducts(limit,offset);
            res.send(products);



        }
        
    } catch (exception) {

        res.status(500).send("internal server error");
        
    }
   

}

async function searchProduct(req,res){

    try{
        const {name}=req.query;
      
        
        const products=await ProductsServices.searchProduct(name);
    
        res.send(products);
        

    }catch{

    return;
    
    }

}







 


module.exports={
getProducts,
searchProduct


};