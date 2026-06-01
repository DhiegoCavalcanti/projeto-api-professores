// Importa o framework Express para inicialização e configuração do servidor
const express = require('express');
// Importa as rotas de professores para serem associadas à aplicação
const professorRoutes = require('./routes/professorRoutes');

// Cria e inicializa a instância da aplicação Express
const app = express();

// Middleware necessário para permitir que a API interprete dados enviados em .json no body
app.use(express.json());

// Associa o prefixo global '/professores' ao arquivo de rotas específico dos professores
app.use('/professores', professorRoutes);

// Exporta a aplicação totalmente configurada para ser escutada no arquivo server.js
module.exports = app;
