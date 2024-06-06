// const bodyParser = require("body-parser");
const express = require("express");
const app= express();

// require("dotenv").config();



const bodyParser =require("body-parser");
app.use(bodyParser.json());
const PORT = process.env.PORT || 7000;

app.listen(PORT, ()=>{
console.log(`listening on port ${PORT}`);
});

app.get("/about",(req,res)=>{
   return res.json( { message: "hello" });
})