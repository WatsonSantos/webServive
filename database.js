const mongoose = require('mongoose')
 
/* Função para a conexão com o Banco de Dados na Núvem */

function connectToDatabase(){ 

mongoose.connect(
  process.env.DATABASE_KEY,
  {
   useNewUrlParser: true,
   useUnifiedTopology: true,

 })

 const db = mongoose.connection
 db.on("error",(error)=>{
   console.error(error)
 })
 db.once("open", ()=>console.log("Conectado a base de dados na nuvem!!!!"))
}

module.exports = connectToDatabase;