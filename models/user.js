const mongoose = require("mongoose");
// const bcrypt= require("bcrypt");

const userSchema=new mongoose.Schema({

name:{
    type:String,
    required:true
},


age:{
    type:String,
 },


work:{
    type:String,
    enum:['chef','waiter','manager'],
    required:true
},

mobile:{
    type:String,
    required:true
},


email:{
    type:String,
    required:true,
    unique:true
},


address:{
    type:String,
 },


username:{
    type:String,
    required:true
},


password:{
    type:String,
    required:true
},
});


const user=mongoose.model('user', userSchema);
module.exports= user;