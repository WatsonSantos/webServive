'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

//O Model de pessoas

var Cidadao = new Schema({
    
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

module.exports = mongoose.model('cidadaos', Cidadao);



//Adicionando um cidadao
/*

const cidad = mongoose.model('cidadaos')

new cidad(
    {
        "numBI":"164323",
        "nome": "Ana Fonseca da Silva",
        "idade":"25",
        "sexo": "Feminino",
        "pai": "José Dias Fonseca",
        "mae": "Maria Jordão da Silva",
        "natural": "Trindade",
        "nascimento": "02-07-1997",
        "estadoCivil": "Solteira",
        "residencia": "Folha Fede",
        "altura": "1.65",
        "dataEmissao": "20-05-2018",
        "dataValidade": "23-05-2021",
        "foto": "https://images.pexels.com/photos/4355346/pexels-photo-4355346.jpeg?cs=srgb&dl=pexels-murat-esibatir-4355346.jpg&fm=jpg"
    }
).save().then(()=>{
    console.log("Usuário criado com sucesso!!!")
}).catch((err)=>{
    console.log("Houve um erro ao registrar um usuário: "+erro)
})


*/