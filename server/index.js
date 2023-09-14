
const express = require('express');
const {mongoose} = require('mongoose');

const cors  = require('cors');
const cookieParser = require('cookie-parser');
const dotenv = require('dotenv').config();
const app = express();

//database connection 
mongoose.connect(process.env.MONGO_URL)
.then(()=>console.log('Database is Connected.'))
.catch((err)=>console.log('Database Connection Problem!!',err))

//middleware to purse the date
app.use(express.json())

//middlewares for json webtoken

app.use(cookieParser())

app.use(express.urlencoded({extended: false}))

/* `app.use('/', require('./routes/authRoutes'));` is setting up a middleware function in the Express
application. */
app.use('/', require('./routes/authRoutes')); 


const port = 5000;
app.listen(port,(req,res)=>{
    console.log(`Server is running on port : ${port}`)
})




