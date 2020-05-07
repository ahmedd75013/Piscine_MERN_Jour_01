const express = require('express')
const users =express.Router()
const cors = require('cors')
const jwt = require('jsonwebtoken')
const bcrypt = require("bcrypt")

const User = require("../models/User")
users.use(cors())

process.env.SECRET_KEY = 'secret'

users.post('/register' , (req , res) =>{
    const today = new Data()
    const userData ={
        login:req.body.login,
        email:req.body.email,
        password:req.body.password,
        created: today

    }

    User.findOne({
        email:req.body.email
    })

    .then(user => {
        if(!user){
            bcrypt.hash(req.body.password, 10, (err , hach) => {
                userData.password = hach
                User.create(userData)
                .then(user => {
                    res.json({status: user.email + 'registered!'})
                })

                .catch(err =>{
                    res.send('error: ' + err)
                })
            })
        }else{
            res.json({ error:"User already existe" })
        }
    })
    .catch(err =>{
        res.send('error :  ' + err)
    })
})

users.post('/login' , (req , res) =>{
    User.findOne({
        email:req.body.email
    })
    .then(user =>{
        if(user){
            if(bcrypt.compareSync(req.body.password,user.password))
            {
                const payload = {
                    _id:user._id,
                    login: user.login,
                    email : user.email,
                    password : user>password
                }
                let token = jwt.sign(payload,process.env.SECRET_KEY ,{
                    expiresIn:1440
                })
                res.send(token)
                
            }else{
                res.json({error: "User does not exist"})
                
            }
          
        }else{
            res.json({error:"User does not existe"})
        }
    })
    .catch(err => {
        res.send("error: " + err)
    })
})

module.exports = users 
