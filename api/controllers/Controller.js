'use strict';
const mongoose = require('mongoose'),
Pessoa = mongoose.model('pessoas');

//-------------Controllers-------------


//Controler para todas as pessoas
exports.list_all_pessoas = function(req, res) {
   Pessoa.find({}, function(err, msg) {
      if (err)
          res.send(err);
      res.json(msg);
   });
};


//Controler para uma pessoa atravez do ID
exports.read_pessoa =  function(req, res) {
    Pessoa.findById(req.params.pessId, function(err, msg) {
   if (err)
      res.send(err);
   res.json(msg);
   });
};


//Controler para uma pessoa atravez do BI
exports.read_pessoaBI = function(req, res) {

    //Pegando o valor da chave no arquivo .env
    const key = process.env.WEBSERVICE_KEY
    //Passndo a chave no header
    req.headers['x-access-token'] = key;

    
    let webserviceChave = req.headers['x-access-token'];
    if (!webserviceChave){ 
     return res.status(403).send({message: 'Nenhuma chave foi informada.' });
    }
    Pessoa.findOne({numBI:req.params.numBI}, function(err, msg) {
   if (err)
      res.send(err);
   res.json(msg);
   });
};


//Controller de criação de pessoas
exports.create_pessoa = function(req, res) {
   const nova_pessoa = new Pessoa(req.body);
   nova_pessoa.save(function(err, msg) {
   if (err)
      res.send(err);
   res.json(msg);
   });
};

//Controller de atualização de pessoas
exports.update_pessoa = function(req, res) {
   Pessoa.findOneAndUpdate({_id: req.params.id}, req.body, {new: true}, function(err, msg) {
   if (err)
      res.send(err);
   res.json(msg);
   });
};

//Controler de exclusão de pessoas
exports.delete_pessoa = function(req, res) {
   Pesssoa.remove({
      _id: req.params.id
   }, function(err, msg) {
   if (err)
      res.send(err);
   res.json({ message: 'Pessoa removida com sucesso!' });
   });


};
