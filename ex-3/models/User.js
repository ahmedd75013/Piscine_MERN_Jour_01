const mongoose = require('mongoose')
const Shema = mongoos.Schema

const userSchema = new Schema({
    login:{
        type: string
    },
    email:{
        type: string
    },
    password:{
        type: string
    }

 }, {timestamps:true})

const User = mongoose.model('User',userShema)
module.exports = User
