//Incluir as bibliotecas
//Gerenciar as requisições, rotas e URLs, entre outras funcionalidades
const express = require('express');
//Chamar a função express
const router = express.Router();
const db = require('../db/models');

//Criar a rota cadastrar
router.post("/users", async (req,res) => {

    // Receber os dados enviados no corpo da requisição
    var data = req.body;
    //console.log(data);

    //Salvar no banco de dados
    await db.Users.create(data)
    .then((dataUser)=>{
        //Pausar o processamento e retornar os dados em formato de objeto
        return res.json({
            message: 'Users with sucessfully',
            dataUser
        })
    }).catch(() => {
        //Pausar o processamento e retornar a mensagem de erro
        return res.status(400).json({
            message: `Usuario não encontrado    `
        })           
    });

    
})

//Exportar a instrução que está dentro da const router
module.exports = router
