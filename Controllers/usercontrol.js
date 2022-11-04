function addressController(req, res) {
    return res.json({
      id: 1,
      name: "Sir Edmon",
    });
  }


  
  
  module.exports = { addressController };
  

  function changeInfo() {
    console.log("change info");
  }
  
  module.exports = changeInfo;
  




  function resetPassword() {
    console.log("reset password");
  }
  
  module.exports = resetPassword;
