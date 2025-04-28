const mongoose=require('mongoose');
const sschema=new mongoose.Schema({
name:{type:String,required:true},
email:{type:String, required:true},
password:{type:String, required:true}
},{
    timestamps:true
});
 const student=mongoose.model("student",sschema);
 module.exports=student;