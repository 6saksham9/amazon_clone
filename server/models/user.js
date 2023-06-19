const mongoose = require('mongoose');

const userSchema=mongoose.Schema({
    name:{
        required:true,
        type: String,
        trim: trim,
    },

    email:{
        required:true,
        type: String,
        trim: trim,
        validate:{
            validator:(value)=>{
                const re = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
                 return value.match(re);
            },
            message:' '
        }
    },

    password:{
        required:true,
        type: String,
        trim: trim,
    }
})