const  userServices = require('../Services/userservice');

const { isDecimal } = require("../utils/validator");
const { IsEmail } = require("../utils/validator");

const { successResponse, badRequestResponse } = require("../utils/responseBuilder");

async function PutUser(req,res){

  try{

    
    const {id,name,email}=req.body;
    const errorMessages = [];
    if(!id || !name ||!email){
      errorMessages.push("Parameter Need is required");

    }
    if(isDecimal(id)){
      errorMessages.push("Parameter Integer is required");
    }

    if(typeof name!=="string"){
      errorMessages.push("Error with type paramater");
    }
    if(errorMessages.length){
      res.status(400).send(badRequestResponse(errorMessages));
     }else{
       await userServices.PutUser(id,name,email);
       res.status(200).send("Change");
     }

  }catch(exception){
    res.status(500).send("internal server error");
  }


}

module.exports = {
PutUser

}


