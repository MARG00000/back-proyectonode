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
//conexion de base de datos
const uri = `mongodb+srv://${process.env.USERNAME}:${process.env.PASSWORD}@cluster0.i8bofrs.mongodb.net/${process.env.DBNAME}`
mongoose.connect(uri, {

    useNewUrlParser: true,

    useUnifiedTopology: true

}).then(() => {

    console.log('conectao a db')

}).catch(e => {

    console.log('error: ', e)

})
//importar rutas
const authRoutes = require('./routes/auth.js')


app.use('./api/user', authRoutes)

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

