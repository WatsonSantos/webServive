require("dotenv").config();
const express = require('express')
app = express()
bodyParser = require('body-parser')
const { Mongoose } = require('mongoose')
mongoose = require('mongoose')
Pessoa = require('./api/models/Pessoa')
porta = process.env.PORT || 8080

const connectToDatabase = require('./database')
const routes = require('./api/routes/Routes');


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


connectToDatabase();


routes(app);

app.listen(porta,()=>{
    console.log('O servidor do webservice está ativo na porta: ' + porta+" ...")})