const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')

mongoose.connect('mongodb://127.0.0.1:27017')
  .then(() => {
    console.log('Conectados a la base de datos')
  }).catch((err) => {
    console.error('Error en la conexion a la base de datos', err)
  })

const registroRutas = require('./routes/registroRoute')

const app = express();
app.use(cors())
app.use(express.json())
app.use('/registro', registroRutas)

app.listen(3000, () => {
  console.log('Servidor corriendo')
})
