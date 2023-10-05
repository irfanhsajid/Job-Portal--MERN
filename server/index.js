
const express = require('express');
const { mongoose } = require('mongoose');

const cors = require('cors');
const cookieParser = require('cookie-parser');
const dotenv = require('dotenv').config();
const app = express();

//database connection 
mongoose.connect(process.env.MONGO_URL)
    .then(() => console.log('Database is Connected.'))
    .catch((err) => console.log('Database Connection Problem!!', err))

//middleware to purse the date
app.use(express.json())

//middlewares for json webtoken
app.use(cookieParser())

/* a middleware that parses
incoming requests with URL-encoded payloads. */
app.use(express.urlencoded({ extended: false }))


app.use('/', require('./routes/authRoutes'));
app.use('/', require('./routes/jobRoutes'));


const port = 7000;
app.listen(port, (req, res) => {
    console.log(`Server is running on port : ${port}`)
})




