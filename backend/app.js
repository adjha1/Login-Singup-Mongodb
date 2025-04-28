const express=require('express');
const cors=require('cors');
const mongoose=require('mongoose');
const db=require('./database')
const student=require('./studentschema');
const PORT=3002;
const app=express();
app.use(express.json());
app.use(cors());

db();
app.post("/user/login",async(req,res)=>{
const {email,password}= req.body;
   const st=await student.findOne({email});
   if(!st){
    return res.json({msg:"Email does not exists"});
   }
   if(st.password!=password){
    res.json({msg:"Invalid creadentials"});
   }
   
res.json({msg:"login success"});
})

app.post("/user/register",async(req,res)=>{
   const {name,email,password}= req.body;


   console.log(name+email+password)
     await student.create({name,email,password});

    res.json({msg:"Registration done successfully"});
})
    
app.listen(PORT,()=>{
    console.log("Server is running on"+PORT);
});