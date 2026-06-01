// Importa o arquivo de conexão com o banco de dados
const conexao = require('../database/conexao');

// Cria o objeto que conterá todas as operações de banco relacionadas ao Professor
const ProfessorModel = {
    // Função assíncrona para cadastrar um novo professor
    criar: async (nome, disciplina, email, salario) => {
        // Define a query SQL de inserção utilizando placeholders para segurança
        const sql = 'INSERT INTO professores (nome, disciplina, email, salario) VALUES (?, ?, ?, ?)';
        // Executa a query passando os valores recebidos por parâmetro
        const [resultado] = await conexao.execute(sql, [nome, disciplina, email, salario]);
        // Retorna o ID gerado para o novo registro inserido
        return resultado.insertId;
    },

    // Função assíncrona para listar todos os professores cadastrados
    listarTodos: async () => {
        // Define a query SQL para buscar todos os registros da tabela professores
        const sql = 'SELECT * FROM professores';
        // Executa a query no banco de dados aguardando o resultado
        const [linhas] = await conexao.execute(sql);
        // Retorna a lista de registros encontrados
        return linhas;
    },

    // Função assíncrona para buscar um professor específico através do seu ID
    buscarPorId: async (id) => {
        // Define a query SQL filtrando pelo ID do professor
        const sql = 'SELECT * FROM professores WHERE id = ?';
        // Executa a query passando o ID informado por parâmetro
        const [linhas] = await conexao.execute(sql, [id]);
        // Retorna apenas o primeiro elemento encontrado do array (ou undefined se não existir)
        return linhas[0];
    },

    // Função assíncrona para atualizar os dados de um professor existente
    atualizar: async (id, nome, disciplina, email, salario) => {
        // Define a query SQL para modificar os campos baseando-se no ID fornecido
        const sql = 'UPDATE professores SET nome = ?, disciplina = ?, email = ?, salario = ? WHERE id = ?';
        // Executa a query passando os novos dados e o ID correspondente
        const [resultado] = await conexao.execute(sql, [nome, disciplina, email, salario, id]);
        // Retorna a quantidade de linhas que foram alteradas no banco de dados
        return resultado.affectedRows;
    },

    // Função assíncrona para remover os dados de um professor
    deletar: async (id) => {
        // Define a query SQL para remover o registro de acordo com o ID informado
        const sql = 'DELETE FROM professores WHERE id = ?';
        // Executa a query de remoção no banco de dados
        const [resultado] = await conexao.execute(sql, [id]);
        // Retorna a quantidade de linhas afetadas (removidas) no banco de dados
        return resultado.affectedRows;
    }
};

// Exporta o modelo para que possa ser importado e usado no Controller
module.exports = ProfessorModel;
