// Importa o módulo mysql2 na versão com suporte a Promises (async/await)
const mysql = require('mysql2/promise');

// Cria a pool de conexões com as configurações do banco de dados local
const conexao = mysql.createPool({
    host: 'localhost',       // Endereço do servidor do banco de dados
    user: 'root',            // Usuário do MySQL
    password: 'sua_senha',   // Senha do banco de dados
    database: 'escola'       // Nome do banco de dados
});

// Exporta o pool de conexões para ser utilizado na camada Models
module.exports = conexao;
