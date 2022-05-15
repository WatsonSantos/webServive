'use strict';
const mongoose = require('mongoose'),
Pessoa = mongoose.model('pessoas');

exports.list_all_pessoas = function(req, res) {
   Pessoa.find({}, function(err, msg) {
      if (err)
          res.send(err);
      res.json(msg);
   });
};



exports.read_pessoa =  function(req, res) {
    Pessoa.findById(req.params.pessId, function(err, msg) {
   if (err)
      res.send(err);
   res.json(msg);
   });
};


exports.read_pessoaBI = function(req, res) {
    Pessoa.findOne({numBI:req.params.numBI}, function(err, msg) {
   if (err)
      res.send(err);
   res.json(msg);
   });
};

/*
exports.create_pessoa = function(req, res) {
   const nova_pessoa = new Pessoa(req.body);
   nova_pessoa.save(function(err, msg) {
   if (err)
      res.send(err);
   res.json(msg);
   });
};


exports.update_pessoa = function(req, res) {
   Pessoa.findOneAndUpdate({_id: req.params.id}, req.body, {new: true}, function(err, msg) {
   if (err)
      res.send(err);
   res.json(msg);
   });
};


exports.delete_pessoa = function(req, res) {
   Pesssoa.remove({
      _id: req.params.id
   }, function(err, msg) {
   if (err)
      res.send(err);
   res.json({ message: 'Pessoa removida com sucesso!' });
   });


};

*/