const mongoose=require('mongoose');
async function dbConn(){
    try{
        await mongoose.connect("mongodb+srv://adityajha:root@cluster0.slgay.mongodb.net/Login-Singup-mongodb?retryWrites=true&w=majority&appName=Cluster0");
        console.log("Database connection done successfully!!! ")
    }catch(err){
       console.log(err.message)
    }
}

module.exports=dbConn;