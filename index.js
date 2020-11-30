//body parser for sending post requests
// cors for cross origin request 
//express for creating routing of our application
//mongoose for database for our post
/*import method is newly made for node 14+ version and doesn't require 
const expresrequire("express");*/
import express from 'express';
//yzconst express=require('express');
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import  postRoutes from'./routes/posts.js';


// import bodyParser from 'body-parser'; 
// import mongoose from 'mongoose';
// import cors from 'cors';

const app=express();
app.use('/posts',postRoutes);
app.use(bodyParser.json({limit:"30mb",extended:true}));
app.use(bodyParser.urlencoded({limit:"30mb",extended:true}));
app.use(cors());

//mongo db 
const CONNECTION_URL="mongodb+srv://priyanshjain:priyanshjain@cluster0.gx5ln.mongodb.net/test?retryWrites=true&w=majority";
const PORT =6000;
mongoose.connect(CONNECTION_URL,
{useNewUrlParser:true,useUnifiedTopology:true})
.then(()=>app.listen(6000,console.log(`server running on port: $(PORT)`)))
.catch((error)=>console.log(console.error.message));
//app.listen(PORT,()=> console.log(`server running on port: $ {PORT}`));
//app.listen(PORT,console.log(`server running on port: $(PORT)`));
mongoose.set('useFindAndModify',false);//makes sure there are no warnings in the console



