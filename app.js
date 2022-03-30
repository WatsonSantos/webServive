var express = require('express'),
app = express(),
port = process.env.PORT || 8000,
mongoose = require('mongoose'),
Aluno = require('./api/models/Aluno'),
bodyParser = require('body-parser');
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/alunosDB');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
var routes = require('./api/routes/Routes');
routes(app);
app.listen(port);
console.log('Mensagem, O servidor do web server RESTful está ativo na porta: ' + port+" ...");