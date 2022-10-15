const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const objetoSchema = new Schema({
  description: { type: String, require: true },
  typeRegister: { type: String, require: true }, // ENTRADA | SALIDA
  amount: { type: Number, require: true },
  dateCreation: { type: Date, default: Date.now() }
})

module.exports = mongoose.model('registro', objetoSchema)