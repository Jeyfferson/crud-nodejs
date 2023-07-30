//Incluir as bibliotecas
//Gerenciar as requisições, rotas e URLs, entre outras funcionalidades
const express = require('express');
//Chamar a funçã express
const app = express();

// Criar um middleware para receber os dados no corpo da requisição
app.use(express.json());
//Incluir o arquivo que possui a conexão com banco de dados
const db = require('./db/models');


//Testar conexão com banco de dados
//const db = require('./db/models');

//Incluir controllers
const users = require('./controllers/users');

//Criar as rotas
app.use('/', users);



//Iniciar o servidor na porta 3000, criar a função utilizando modelo Arrow function para retornar a mensagem de sucesso
app.listen(3000, () => {
    console.log('Server is running on port 3000');
})