
module.exports = function(app) {
   
const pessoas = require('../controllers/Controller');

// --------------------------------- Rotas ------------------------------------


app.route('/obterpessoas')
//Rota de obtenção de todas as pessoas
   .get(pessoas.list_all_pessoas);


app.route('/obterpessoa/:pessId')
//Rota de obtenção de pessoas por BI
   .get(pessoas.read_pessoa);

//Rota de obtenção de pessoas pelo BI
app.route('/obterpessoaBI/:numBI')
   .get(pessoas.read_pessoaBI);

};


