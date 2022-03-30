'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var Aluno = new Schema({
   nome:{
       type: String,
       required: true,  
   },

   idade:{
       type: Number,
       required: true
   },

   sexo:{
       type: String,
       required: true
   },
   curso:{
       type: String,
       required: true
   },
   morada:{
       type: String,
       required: true
   }
});

module.exports = mongoose.model('Alunos', Aluno);

//Adicionando um usuário
const student = mongoose.model('Alunos')


new student({
    nome: "Watson",
    idade : 23,
    sexo: "Masculino",
    curso: "Licenciatura em Engenharia Informática",
    morada: "Água Bôbô"
}).save().then(()=>{
    console.log("Usuário criado com sucesso!!!")
}).catch((err)=>{
    console.log("Houve um erro ao registrar um usuário: "+erro)
})

