const model = require('../models/registroModel')

const controlador = {
  async listAllRegister(req, res) {
    try {
      const resp = await model.find()
      res.json(resp)
    } catch (error) {
      console.log(error)
      res.sendStatus(500)
    }
  },
  async listOneRegister(req, res) {
    const { id } = req.params
    try {
      const result = await model.findById(id);
      res.json(result);
    } catch (error) {
      console.log(error);
      res.sendStatus(500);
    }
  },
  async createOneRegister(req, res) {
    const { description, typeRegister, amount } = req.body
    const dato = new model;
    dato.description = description;
    dato.typeRegister = typeRegister;
    dato.amount = amount;
    try {
      const result = await dato.save();
      res.json(result);
    } catch (error) {
      console.log(error);
      res.sendStatus(500);
    }
  },
  async updateOneRegister(req, res) {
    const { id } = req.params
    const { description, typeRegister, amount } = req.body
    const datos = {
      description, typeRegister, amount
    }

    try {
      const result = await model.findByIdAndUpdate(id, datos, { new: true })
      res.json(result)
    }
    catch (error) {
      console.log(error)
      res.sendStatus(500)
    }


  },
  async deleteOneRegister(req, res) {
    const { id } = req.params
    try {
      await model.findByIdAndDelete(id);
      res.sendStatus(200);
    } catch (error) {
      console.log(error);
      res.sendStatus(500);
    }
  },

}

module.exports = controlador
