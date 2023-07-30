SEQUENCIA PARA CRIAR O PROJETO
1- Criar o arquivo package
### npm init

Gerencia as requisições, rota, URLs entre outras funcionalidades
### npm install --save express

Rodar o projeto
### node app.js

Instalar a depêndencia de forma global, "-g" siginifica globalmente. Executar o cmd através do prompt de comando, executar somente se nunca intalou a dependência na maquina, após instalar, reiniciar o PC.
### npm install -g nodemon

Instalar a depêndencia como desenvolvedor para reiniciar o servidor sempre que houver uma alteração no código fonte.
### npm install --save-dev nodemon

Rodar o projeto usando o nodemon
### nodemon app.js

Comando SQL para criar a base de dados
### CREATE DATABASE **nome** CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

Sequelize é uma biblioteca JavaScript que facilita o gerenciamento do banco de dados SQL
### npm install --save sequelize

Instalar o driver do db
### npm install --save mysql2

Sequelize-cli interface de linha de comando usada para criar modelos, configurações e arquivos de migração de db
### npm install --save-dev sequelize-cli

Iniciar o serquelize-cli e criar o arquivo config
### npx sequelize-cli init

Manipular variáveis de ambientes
### npm install dotenv --save
