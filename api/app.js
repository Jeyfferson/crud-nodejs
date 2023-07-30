//Incluir as bibliotecas
//Gerenciar as requisições, rotas e URLs, entre outras funcionalidades
const express = require('express');
//Chamar a funçã express
const app = express();
//Incluir controllers
const users = require('./controllers/users');

//Criar as rotas
app.use('/', users);


app.listen(3000, () => {
    console.log('Server is running on port 3000');
})