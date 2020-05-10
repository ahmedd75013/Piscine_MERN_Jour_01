const mongoose = require('mongoose')
const Schema = mongoose.Schema


const exSchema = new Schema({


    titre:{ type : String },
    description:{ type : String},
 
},{
    timestamps:true,
});

const Ex = mongoose.model('Ex' ,exSchema);

module.exports = Ex ;