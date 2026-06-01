// Importa o framework Express para gerenciar as rotas do sistema
const express = require('express');
// Instancia o roteador do Express para criar sub-rotas isoladas
const router = express.Router();
// Importa o arquivo do controlador do professor
const ProfessorController = require('../controllers/professorController');

// Define a rota POST para cadastrar professores
router.post('/', ProfessorController.cadastrar);

// Define a rota GET para listar todos os professores cadastrados
router.get('/', ProfessorController.listar);

// Define a rota GET para buscar um único professor através do ID passado na URL
router.get('/:id', ProfessorController.buscarPorId);

// Define a rota PUT para atualizar as informações do professor através do ID passado na URL
router.put('/:id', ProfessorController.atualizar);

// Define a rota DELETE para remover o registro de um professor através do ID passado na URL
router.delete('/:id', ProfessorController.deletar);

// Exporta o roteador configurado para que seja associado no arquivo app.js principal
module.exports = router;
