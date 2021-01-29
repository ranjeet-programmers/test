const express=require('express');
const mongoose=require('mongoose');
const bodyParser=require('body-parser');
const app=express();
require('dotenv/config');

//Import Routes
const postsRoute=require('./routes/posts');
const studentsRoute=require('./routes/students');

//Middlewares
app.use(bodyParser.json());
app.use('/posts',postsRoute);
app.use('/students',studentsRoute);



// ROUTES
app.get('/',(req,res)=>{
   res.send('we are on home page');
});

// Connecting to database
mongoose.connect(
    process.env.DB_CONNECTION,{useUnifiedTopology: true,useNewUrlParser: true},
    (err)=>{
    console.log('connected to mongodb databases'+err);
});



// listening to server 
app.listen(3000);