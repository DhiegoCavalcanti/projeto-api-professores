// Importa o modelo do professor para acessar as funções do banco de dados
const ProfessorModel = require('../models/professorModel');

// Cria o objeto que armazenará as funções controladoras das requisições
const ProfessorController = {
    // Função para tratar a requisição de cadastro de um novo professor (POST)
    cadastrar: async (req, res) => {
        try {
            // Desestrutura os dados enviados no corpo da requisição
            const { nome, disciplina, email, salario } = req.body;
            // Chama o modelo para inserir os dados e guarda o ID gerado
            const idNovoProfessor = await ProfessorModel.criar(nome, disciplina, email, salario);
            // Retorna o status 211 (Created) com a mensagem de sucesso
            return res.status(201).json({ mensagem: "Professor cadastrado com sucesso", id: idNovoProfessor });
        } catch (erro) {
            // Em caso de erro, envia o status 500 com a mensagem de erro
            return res.status(500).json({ erro: "Erro ao cadastrar professor: " + erro.message });
        }
    },

    // Função para tratar a requisição de listagem completa dos professores cadastrados (GET)
    listar: async (req, res) => {
        try {
            // Chama o modelo para buscar todos os professores cadastrados
            const professores = await ProfessorModel.listarTodos();
            // Retorna o array de professores obtido com o status 200 (OK)
            return res.status(200).json(professores);
        } catch (erro) {
            // Em caso de erro, envia o status 500 com a mensagem de erro
            return res.status(500).json({ erro: "Erro ao listar professores: " + erro.message });
        }
    },

    // Função para tratar a requisição de busca por um professor específico através do seu ID (GET)
    buscarPorId: async (req, res) => {
        try {
            // Obtém o parâmetro ID enviado diretamente pela URL da rota
            const { id } = req.params;
            // Busca o professor utilizando a função do modelo
            const professor = await ProfessorModel.buscarPorId(id);
            
            // Verifica se o professor não foi localizado no banco de dados
            if (!professor) {
                // Envia uma resposta com status 404 (Not Found) informando a ausência do registro
                return res.status(404).json({ mensagem: "Professor não encontrado" });
            }
            // Caso contrário, retorna status 200 (OK) com mensagem de sucesso
            return res.status(200).json(professor);
        } catch (erro) {
            // Em caso de erro, envia o status 500 (Internal Server Error) com a mensagem de erro
            return res.status(500).json({ erro: "Erro ao buscar professor: " + erro.message });
        }
    },

    // Função para tratar a requisição de atualização dos dados de um professor existente (PUT)
    atualizar: async (req, res) => {
        try {
            // Resgata o ID enviado por parâmetro na URL
            const { id } = req.params;
            // Desestrutura os novos dados enviados no corpo da mensagem
            const { nome, disciplina, email, salario } = req.body;
            // Executa a query de atualização através do modelo e obtém as linhas modificadas
            const linhasAfetadas = await ProfessorModel.atualizar(id, nome, disciplina, email, salario);
            
            // Se nenhuma linha for alterada, implica-se que o ID não existe
            if (linhasAfetadas === 0) {
                // Envia uma resposta com status 404 (Not Found) informando a ausência do registro
                return res.status(404).json({ mensagem: "Professor não encontrado" });
            }
            // Caso contrário, retorna status 200 (OK) com mensagem de sucesso
            return res.status(200).json({ mensagem: "Professor atualizado com sucesso" });
        } catch (erro) {
            // Em caso de erro, envia o status 500 (Internal Server Error) com a mensagem de erro
            return res.status(500).json({ erro: "Erro ao atualizar professor: " + erro.message });
        }
    },

    // Função para tratar a requisição de remoção dos dados de um professor (DELETE)
    deletar: async (req, res) => {
        try {
            // Captura o ID do registro a ser excluído através dos parâmetros da URL
            const { id } = req.params;
            // Executa o comando de remoção através da camada model
            const linhasAfetadas = await ProfessorModel.deletar(id);
            
            // Se nenhuma linha for removida, implica-se que o ID não existe
            if (linhasAfetadas === 0) {
                // Envia uma resposta com status 404 (Not Found) informando a ausência do registro
                return res.status(404).json({ mensagem: "Professor não encontrado" });
            }
            // Caso contrário, retorna status 200 (OK) com mensagem de sucesso
            return res.status(200).json({ mensagem: "Professor removido com sucesso" });
        } catch (erro) {
            // Em caso de erro, envia o status 500 (Internal Server Error) com a mensagem de erro
            return res.status(500).json({ erro: "Erro ao deletar professor: " + erro.message });
        }
    }
};

// Exporta o controlador para mapeamento nas rotas da aplicação
module.exports = ProfessorController;
