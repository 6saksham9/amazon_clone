const express=require("express");


//this is a private member

const authRouter = express.Router();

// authRouter.get('/user',(req,res)=>{
//     res.json({msg:"saksham"})
// });


authRouter.post('/api/signup',(req,res)=>{
    const{name,email,password}=req.body; // in js u can send all once

    

    //{
    //'name':name,'email':email,'password':password
    //}
    //get the data from client
    //post that data in database
    //return that data to the user
})

//now it can be use anywhere in the file
module.exports=authRouter;