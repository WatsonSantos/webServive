'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
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


/*

new people({
    numBI:164322,
    nome: "Watson",
    idade : 23,
    sexo: "Masculino",
    pai: "Izidoro Luiz Alves dos Santos",
    mae: "Ângela Tavares Monteverde",
    natural: "Conceição - São Tomé",
    nascimento: "25-04-1998",
    estadoCivil: "Solteiro",
    residencia: "Água Bôbô",
    altura: 1.72,
    dataEmissao: "21-04-2019",
    dataValidade: "22-04-2022",
    foto : "https://scontent-jnb1-1.xx.fbcdn.net/v/t1.6435-9/94551030_2350610708565018_5557430000166109184_n.jpg?_nc_cat=101&ccb=1-5&_nc_sid=8bfeb9&_nc_eui2=AeGV4Dw1gt_VFaq0GESxanZqwCNiSNWe1ZjAI2JI1Z7VmGx06IS0Qs1XNRM-9Cgu-j112RkIF0-JHWclh8MG9MrU&_nc_ohc=iJ0TSljjJPYAX8sB-Yj&_nc_ht=scontent-jnb1-1.xx&oh=00_AT81LWORATXbO2WkVNYm4B_djMcw2DtSpCelN2faIZ_2gA&oe=629716F2"
}).save().then(()=>{
    console.log("Pessoa criada com sucesso!!!")
}).catch((err)=>{
    console.log("Houve um erro ao registrar a pessoa!: "+err)
})

*/
