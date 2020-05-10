var express = require('express');
var cors = require('cors');
var bodyParser = require('body-parser');
var app = express();
var mongoose = require('mongoose');
var PORT =  3001

app.use(bodyParser.json());


app.use(cors())
app.use(
    bodyParser.urlencoded({
        extended:false
    })
)

const exRouter = require('./routes/ex');
app.use('/ex',exRouter);



const mongoURI = 'mongodb://localhost:27042/mern'

mongoose.connect(mongoURI ,{useNewUrlParser:true})
.then(()=>console.log("MongoDB connected"))
.catch(err =>console.log(err))

var Users = require('./routes/Users')

app.use('/users' , Users)
app.listen(PORT,() => {
    console.log("Server is running on port : " + PORT)
})


