const express = require('express')
const mongoose = require('mongoose')
const morgan = require('morgan')
const bodyParser = require('body-parser')

const  AuthRoute = require('./route/auth')

mongoose.connect('mongodb://localhost:27042/mern',{useNewUrlParser:true, useUnifiedTopology:
const db = mongoose.connection

db,on('error' ,(err) => {
    
    console.log(err)

})

db.