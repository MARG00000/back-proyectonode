//declaracion constantes
const express = require('express')
const mongoose = require('mongoose')
const bodyparser = require('body-parser')
require('dotenv').config

const app = express()

//capturar body
app.use(bodyparser.urlencoded({
    extended: false

}))
app.use(bodyparser.json())

app.get('/',(req , res) =>{
    res.json({
        estado:true,
        mensaje: 'works fone!!!'
    })
})

const PORT = process.env.PORT || 3001
app.listen(PORT , () =>{
    console.log('Servidor jalando,excelente' + (PORT))

})