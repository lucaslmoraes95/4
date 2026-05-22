const express = require("express");
const router = express.Router();

router.get("/", (req, res)=>{
   res.render("pages/index", {"retorno":null, "valores":{"numero":""}});
})

router.post("/verificar", (req, res)=>{
   // recuperar dados do formulário
   let numero = parseInt(req.body.numero);
   // realizar a manipulação
   if(numero == 1){
       var dia = "Domingo";
   }else if(numero == 2){
       var dia = "Segunda-feira";
   }else if(numero == 3){
       var dia = "Terça-feira";
   }else if(numero == 4){
       var dia = "Quarta-feira";
   }else if(numero == 5){
       var dia = "Quinta-feira";
   }else if(numero == 6){
       var dia = "Sexta-feira";
   }else if(numero == 7){
       var dia = "Sábado";
   }else{
       var dia = "Valor inválido!";
   }
   // formatar os dados resultantes
   let objJson = {"dia": dia}
   // enviar os dados para mesclar com o html
   res.render("pages/index", {
       "retorno": objJson,
       "valores":{"numero": req.body.numero}
   })
})
module.exports = router;