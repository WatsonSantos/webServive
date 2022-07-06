//Importando os módulos

require("dotenv").config();
const express = require('express')
app = express()
bodyParser = require('body-parser')
const { Mongoose } = require('mongoose')
mongoose = require('mongoose')

const swaggerUI = require('swagger-ui-express')
const swaggerDocument = require('./swagger.json')

Pessoa = require('./api/models/Pessoa')
const connectToDatabase = require('./database')
const routes = require('./api/routes/Routes');

//Configurações
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//Conectando ao Banco de Dados
connectToDatabase();

//Rota Principal

app.get('/', (req, res)=>{
   
    res.send("<h1>Web Service 1.0</h1>")
 })

//Chamando todas as rotas
routes(app);

//Swagger
app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerDocument ))

porta = process.env.PORT || 8080

//Criando o Servidor
app.listen(porta,()=>{
    console.log('O servidor do webservice está ativo no endereço: locallhost:'+ porta)})