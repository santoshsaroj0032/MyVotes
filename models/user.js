const mongoose = require("mongoose");
const { boolean } = require("webidl-conversions");
// const bcrypt= require("bcrypt");

const userSchema=new mongoose.Schema({

name:{
    type:String,
    required:true
},


age:{
    type:String,
 },


 email:{
     type:String,
     required:true,
     unique:true
 },
 

mobile:{
    type:String,
    required:true
},




address:{
    type:String,
 },


aadharCardNumber:{
    type:String,
    required:true,
    unique:true 
},


password:{
    type:String,
    required:true
},


role:{
    type:String,
   enum:['voter', 'admin'],
   default:'voter'
},


isVoted:{
    type:boolean,
   default:false
},

});


const user=mongoose.model('user', userSchema);
module.exports= User;