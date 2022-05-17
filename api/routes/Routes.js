'use strict';

module.exports = function(app) {
   
const pessoas = require('../controllers/Controller');

// Rota Pessoas

app.route('/obterpessoas')
   .get(pessoas.list_all_pessoas)
   //.post(pessoas.create_pessoa);

app.route('/obterpessoa/:pessId')
   .get(pessoas.read_pessoa)
   //.put(pessoas.update_pessoa)
   //.delete(pessoas.delete_pessoa);

app.route('/obterpessoaBIazbyq!osj&spdufgd@ggv2549$562i?dfnkd876982/:numBI')
   .get(pessoas.read_pessoaBI);
   
};


