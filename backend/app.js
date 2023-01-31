const express=require('express');
const { connectDatabase } = require('./config/database');
const cookieParser=require("cookie-parser");
const app=express();
require("dotenv").config({path:"backend/config/config.env"});

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cookieParser());
//Importing files
const post=require("./routes/post");
const user=require("./routes/user");
const chat=require("./routes/chat");
const { db } = require('./models/Post');
//Using Routes

app.use("/api/v1",post);
app.use("/api/v1",user);
app.use("/api/v1",chat);
module.exports=app;