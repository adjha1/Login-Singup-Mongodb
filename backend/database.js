const mongoose=require('mongoose');
async function dbConn(){
    try{
        await mongoose.connect("mongodb://localhost:27017/userlogin");
        console.log("Database connection done successfully!!! ")
    }catch(err){
       console.log(err.message)
    }
}

module.exports=dbConn;