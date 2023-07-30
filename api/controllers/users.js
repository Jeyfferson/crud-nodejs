//Incluir as bibliotecas
//Gerenciar as requisições, rotas e URLs, entre outras funcionalidades
const express = require('express');
//Chamar a função express
const router = express.Router();

//Criar a rota cadastrar
router.post("/users", async (req,res) => {
    return await res.json({
        message: 'Users successfully'
    })
})

//Exportar a instrução que está dentro da const router
module.exports = routerS
