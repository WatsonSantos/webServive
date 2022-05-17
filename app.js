require("dotenv").config();
const express = require('express')
app = express()
bodyParser = require('body-parser')
const { Mongoose } = require('mongoose')
mongoose = require('mongoose')
Pessoa = require('./api/models/Pessoa')


const connectToDatabase = require('./database')
const routes = require('./api/routes/Routes');


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


connectToDatabase();


routes(app);
porta = process.env.PORT || 8080
app.listen(porta,()=>{
    console.log('O servidor do webservice está ativo na porta: ' + porta+" ...")})