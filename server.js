// Importa as configurações do aplicativo Express definidas no arquivo app.js
const app = require('./src/app');

// Define a porta lógica onde o servidor da API irá rodar localmente
const PORT = 3000;

// Inicializa a escuta do servidor na porta definida e exibe uma mensagem informativa no console
app.listen(PORT, () => {
    // Exibe a confirmação de que o servidor está online e operando perfeitamente
    console.log(`Servidor rodando com sucesso na porta ${PORT}`);
});
