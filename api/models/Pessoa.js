'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

//O Model de pessoas

var Pessoa = new Schema({
    
    numBI:{
        type:Number,
        index: true,
        unique: true,
        required: true
    },
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
   pai:{
       type: String,
       required: true
   },
   mae:{
       type: String,
       required: true
   },
   natural:{
       type: String,
       required: true
   },
   nascimento:{
       type: String,
       required: true

   }, estadoCivil:{
       type: String,
       required: true
   },

   residencia:{
       type: String,
       required: true
   },

   altura:{
       type: Number,
       required: true
   },

   dataEmissao:{
       type: String,
       required: true
   },
   dataValidade:{
       type: String,
       required: true
   },

   foto:{
       type: String,
       redquired: true
   },

   data:{
       type: Date,
   }

});

module.exports = mongoose.model('pessoas', Pessoa);



//Adicionando um usuário
const people = mongoose.model('pessoas')

