const  ProductsServices = require('../Services/products');
const { successResponse, badRequestResponse } = require("../utils/responseBuilder");
const { IsString } = require("../utils/validator");



async function getProducts(req,res){

        const {limit, offset}=req.query;
        
        const errorMessages = [];
        if(!limit && !offset){
            errorMessages.push("Parameter Need is required");
        }
        //*FALTA VALIDACION SI ES DECIMAL.

        if(errorMessages.length){
            res.status(400).send(errorMessages);
        }else{
            console.log("entro");
            const products=await ProductsServices.getProducts1(0,3);
            res.send(products);



        }
        
  
   

}

async function searchProduct(req,res){

    try{
        const {name}=req.query;
        const errorMessages = [];
      
        if(!name){
            errorMessages.push("Parameter Need is required");
        }

        if(typeof name !== "string"){
            errorMessages.push("name is not string");
        }


        if(errorMessages.length){
            console.log("entro");

         res.status(400).send(badRequestResponse(errorMessages));

        }
        else{
        const products=await ProductsServices.searchProduct(name);
    
        res.send(products);
        }
        

    }catch(exception){

    return;
    
    }

}

module.exports={
getProducts,
searchProduct

};