const express = require('express')

const dbConnection = require('../config/dbConnection')

const NoticiaController = require('../noticias/controllers/NoticiaController');
const NoticiaModel = require('../noticias/models/NoticiaModel');

const UsersModel = require('../usuarios/models/usuariosModel')
const UsersController = require('../usuarios/controllers/usuariosController')

const app = express()
app.use(express.json())

app.get('/health', (_, res) => {
  res.send()
})

const umodel = new UsersModel(dbConnection);
const ucontroller = new UsersController(umodel);
app.use('/users', ucontroller.buildRouter());

const nmodel = new NoticiaModel(dbConnection);
const ncontroller = new NoticiaController(nmodel);
app.use('/noticias', ncontroller.buildRouter());

module.exports = app
