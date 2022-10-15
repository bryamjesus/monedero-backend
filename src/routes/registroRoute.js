const express = require('express');
const router = express.Router()
const controlador = require('../controllers/registroController')

router.get('/', (req, res) => {
  controlador.listAllRegister(req, res)
})

router.get('/:id', (req, res) => {
  controlador.listOneRegister(req, res)
})

router.post('/', (req, res) => {
  controlador.createOneRegister(req, res)
})

router.put('/:id', (req, res) => {
  controlador.updateOneRegister(req, res)
})

router.delete('/:id', (req, res) => {
  controlador.deleteOneRegister(req, res)
})


module.exports = router