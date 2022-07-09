'use strict';

//Importando Mongooose e o Modell dos cidadãos
const mongoose = require('mongoose'),
   Cidadao = mongoose.model('cidadaos');


//------------------------------------Controllers------------------------------------


//Controller para todas os cidadãos
exports.list_all_cidadaos = function (req, res) {
   Cidadao.find({}, function (err, msg) {
      if (msg == null)
         res.status(404).send({ message: 'Nenhuma Cidadão encontrado' });
      res.status(200).json(msg);
   });
};


//Controller para um cidadão atravez do ID
exports.read_cidadao = function (req, res) {
   Cidadao.findById({ _id: req.params.cidadaoId }, function (err, msg) {
      if (null)
         res.status(404).send({ message: 'Cidadão não encontrado' });
      res.status(200).json(msg);
   });
};


//Controller para um cidadao atravez do BI
exports.read_cidadaoBI = function (req, res) {
   Cidadao.findOne({ numBI: req.params.numBI }, function (err, msg) {
      if (err)
         res.status(404).send({ message: 'Cidadão não encontrado' });
      res.status(200).json(msg);
   });
};


//Controller de criação de cidadão
exports.create_cidadao = function (req, res) {
   const nova_cidadao = new Cidadao(req.body);
   nova_cidadao.save(function (err, msg) {
      if (err)
         res.send(err);
      res.status(201).json({ message: 'Cidadão criado com sucesso!' });
   });
};

//Controller de atualização de cidadão
exports.update_cidadao = function (req, res) {
   Cidadao.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true }, function (err, msg) {
      if (err)
         res.send(err);
      res.status(201).json({ message: 'Cidadão atualizado com sucesso!' });
   });
};

//Controller de exclusão de cidadão
exports.delete_cidadao = function (req, res) {
   Cidadao.remove({
      _id: req.params.id
   }, function (err, msg) {
      if (err)
         res.send(err);
      res.status(201).json({ message: 'Cidadão removido com sucesso!' });
   });


};
