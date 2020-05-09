const express = require('express')
const users = express.Router()
const cors = require('cors')
const jwt = require('jsonwebtoken')
const bcrypt = require("bcrypt")

const User = require("../models/User")
users.use(cors())

process.env.SECRET_KEY = 'secret'

users.post('/register' , (req , res) =>{

    const userData ={
        login:req.body.login,
        email:req.body.email,
        password:req.body.password,
        type:true,
    

    }

    console.log(userData)

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
            res.json({ error:"L'utilisateur existe déjà" })
        }
    })
    .catch(err =>{
        res.send('error :  ' + err)
    })
})

users.post('/login' , (req , res) =>{
    console.log(req.body)
    User.findOne({
        login:req.body.login
    })
    .then(user =>{
        console.log(user)
        if(user){

            if(bcrypt.compareSync(req.body.password,user.password))
            {
                const payload = {
                 
                    login: user.login,
                    password : user.password,
                   
                }
                let token = jwt.sign(payload,process.env.SECRET_KEY ,{
                    expiresIn:1440
                })
                res.json({user ,token})
                
            }else{
                
                res.json({error:"L'utilisateur n'existe pas"})
                
            }
          
        }else{
            res.json({error:"L'utilisateur n'existe pas"})
        }
    })
    .catch(err => {
        res.send("error: " + err)
    })
})

module.exports = users 
