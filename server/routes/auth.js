const express=require("express");
const User = require("../models/user");
const bcryptjs= require('bcryptjs');


//this is a private member

const authRouter = express.Router();

// authRouter.get('/user',(req,res)=>{
//     res.json({msg:"saksham"})
// });


authRouter.post("/api/signup",async(req,res)=>{
     //async bcoz findone is a promise

     try{
        const{name,email,password}=req.body; // in js u can send all once

        const existingUser= await User.findOne({email});
    
        if(existingUser)
        {
            return res.status(400).json({msg:"User with same email already exists!"}); 
        }

        const hasedPasswaord=await bcryptjs.hash(password,8);  //8-salt , random
    
        let user=new User({//let vs var
            email,
            password:hasedPasswaord,
            name,        
        })
    
    
        user =await user.save(); //using mongodb it will take tym
    
        res.json(user);
     } catch(e){
        res.status(500).json({error:e.message});
     }
    

    //{
    //'name':name,'email':email,'password':password
    //}
    //get the data from client
    //post that data in database
    //return that data to the user
})


//signIn Route

authRouter.post('/api/signin',async(req,res)=>{
    try{
        const {email,password}=req.body;
        const user= await User.findOne({email});
        if(!user){
            return res.status(400).json({msg:"User with this email does not exist!"});
        }

        //comparing passwords
        const isMatch=await bcryptjs.compare(password,user.password);

        if(!isMatch){
            return res.status(400).json({msg:"Incorrect password."});        
        }

    } catch(e){
        res.status(500).json({error: e.message});
    }
});






//now it can be use anywhere in the file
module.exports=authRouter;