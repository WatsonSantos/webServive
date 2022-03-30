'use strict';
var mongoose = require('mongoose'),
Aluno = mongoose.model('Alunos');

exports.list_all_alunos = function(req, res) {
   Aluno.find({}, function(err, msg) {
      if (err)
      res.send(err);
      res.json(msg);
   });
};
exports.create_aluno = function(req, res) {
   var novo_aluno = new Aluno(req.body);
   novo_aluno.save(function(err, msg) {
   if (err)
      res.send(err);
   res.json(msg);
   });
};
exports.read_aluno = function(req, res) {
   Aluno.findById(req.params.msgId, function(err, msg) {
   if (err)
      res.send(err);
   res.json(msg);
   });
};
exports.update_aluno = function(req, res) {
   Aluno.findOneAndUpdate({_id: req.params.msgId}, req.body, {new: true}, function(err, msg) {
   if (err)
      res.send(err);
   res.json(msg);
   });
};
exports.delete_aluno = function(req, res) {
   Aluno.remove({
      _id: req.params.msgId
   }, function(err, msg) {
   if (err)
      res.send(err);
   res.json({ message: 'Aluno deletado com sucesso!' });
   });
};