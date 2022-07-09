
module.exports = function(app) {
  
//Importando o controller de cidadãos
const cidadaos = require('../controllers/Controller');

//Importando o Midleware de verificação de autenticação
const {Authorization} = require("../auth/Authorization")

//Importando o Midleware inserção da chave nas rotas
const {Key} = require("../auth/key")


// --------------------------------- Rotas ------------------------------------

//Rota de obtenção de todos os cidadãos
app.route('/obtercidadaos')
.get(Key,Authorization,cidadaos.list_all_cidadaos);

//Rota de obtenção de cidadão por BI
app.route('/obtercidadao/:cidadaoId')
.get(Key,Authorization,cidadaos.read_cidadao);

//Rota de obtenção de cidadão pelo BI
app.route('/obtercidadaoBI/:numBI')
   .get(Key,Authorization,cidadaos.read_cidadaoBI);

};





