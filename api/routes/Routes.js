
module.exports = function(app) {
   
const pessoas = require('../controllers/Controller');

// --------------------------------- Rotas ------------------------------------

//Rota de obtenção de todas as pessoas
app.route('/obterpessoas')
.get(pessoas.list_all_pessoas);

//Rota de obtenção de pessoas por BI
app.route('/obterpessoa/:pessId')
.get(pessoas.read_pessoa);

//Rota de obtenção de pessoas pelo BI
app.route('/obterpessoaBI/:numBI')
   .get(pessoas.read_pessoaBI);

};


