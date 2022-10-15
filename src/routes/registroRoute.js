const express = require('express');
const router = express.Router()
const controlador = require('../controllers/registroController')

router.get('/', (req, res) => {
  controlador.listar(req,res)
})

module.exports = router