'use strict';
module.exports = function(app) {
var alunos = require('../controllers/Controller');

// Rota Alunos

app.route('/alunos')
   .get(alunos.list_all_alunos)
   .post(alunos.create_aluno);

app.route('/alunos/:id')
   .get(alunos.read_aluno)
   .put(alunos.update_aluno)
   .delete(alunos.delete_aluno);
};