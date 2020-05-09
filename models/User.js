const mongoose = require('mongoose')
const Schema = mongoose.Schema

const UserSchema = new Schema({
    login:{
        type: String
    },
    email:{
        type: String
    },
    password:{
        type: String
    }, 
    type:{
        type: Boolean
    }
   
})

module.exports = User = mongoose.model('user' ,UserSchema)
