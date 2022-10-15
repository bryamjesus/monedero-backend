const model = require('../models/registroModel')

const controlador = {
  async listar(req, res) {
    try {
      const resp = await model.find()
      res.json(resp)
    } catch (error) {
      console.log(error)
      res.sendStatus(500)
    }
  }
}

module.exports = controlador
