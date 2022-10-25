const { Schema } = require('mongoose')
const monngose = require ('moongose')

const userSchema = monngose.Schema({
    name:{
        type: String,
        required: true,
        min:6,
        max:255
    },
    address:{
        type: String,
        required: true,
        max:255
    },
    lastname:{
        type: String,
        required: true,
        min:6,
        max:255
    },
    age:{
        type:Number,
        required: true,
    },
    date:{
        type:Date,
        default:Date.now
    }

})

module.exports = monngose.modul('User',Schema)