const express = require('express')

const dbConnection = require('../config/dbConnection')

const NoticiaController = require('../noticias/controllers/NoticiaController');
const NoticiaModel = require('../noticias/models/NoticiaModel');

const app = express()
app.use(express.json())

app.get('/health', (_, res) => {
  res.send()
})

const nmodel = new NoticiaModel(dbConnection);
const ncontroller = new NoticiaController(nmodel);
app.use('/noticias', ncontroller.buildRouter());

module.exports = app
