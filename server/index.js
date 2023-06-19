//IMPORTS FROM PACKAGES

// console.log('hello');

//IMPORTS FROM OTHER FILES

const authRouter=require("./routes/auth")
const mongoose=require('mongoose');
const express = require ('express');

//MIDDLEWARE
//CLIENT -> SERVER -> CLIENT (stopped) but in Socket.io it continues listening i.e. realtime chatting
//client don't know in which format we have to send the data so middleware comes into the picture



//INITIALISATION
const PORT=3000;

const app = express(); //initialized the express


const DB = "mongodb+srv://Saksham:vrgJMCQ5GcL4IG3h@cluster0.yecwhfb.mongodb.net/?retryWrites=true&w=majority"

//implementing middleware

app.use(authRouter);

//connections
mongoose.connect(DB).then(()=>{
    console.log('Connection Successful');
}).catch((e)=>{
    console.log(e);
});


// creating the api
//get, put, post, delete, update -> CRUD

//get

//https://<youripaddress>/hello-world
// app.get('/hello-world',(req,res)=>{
//     res.json({hi:"hello world"})//sending the data in jason format else you can do res.send("hello world")
// });


// app.get('/',(req,res)=>{
//     res.json({'name':'saksham'})
// });

//can't do again n again calling for the api


app.listen(PORT, () =>
{
    console.log(`'connected at port ${PORT}`);
} );  //function() or ()=> both are correct