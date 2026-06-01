# Sistema de Cadastro de Professores - API REST MVC

Este projeto consiste no desenvolvimento de uma API REST completa para o gerenciamento (CRUD) de professores. A aplicação foi construída utilizando a arquitetura **MVC (Model-View-Controller)** de forma estrita, empregando **Node.js**, **Express**, e comunicação assíncrona direta com o banco de dados **MySQL** sem o uso de frameworks ORM.

Atividade desenvolvida para a disciplina de **Desenvolvimento Web / Back-end** sob a orientação do **Prof. [cite_start]Evandro de Lima Rodrigues**.

## Tecnologias e Dependências Utilizadas

Em conformidade estrita com os requisitos do projeto, foram utilizadas apenas as seguintes tecnologias e dependências permitidas:
* **Node.js** (Ambiente de execução)
* **Express** (Framework para gerenciamento de rotas e requisições HTTP)
* **MySQL2** (Driver nativo para conexão assíncrona ao banco de dados)
* **Nodemon** (Ambiente de desenvolvimento para reinicialização automática) 

## Estrutura Obrigatória do Projeto

A organização dos diretórios segue rigorosamente o padrão arquitetural MVC exigido no plano de avaliação:

```text
projeto-api-professores/
├── node_modules/
├── src/
│   ├── controllers/
│   │   └── professorController.js  # Gerenciamento das regras de requisição e respostas JSON
│   ├── database/
│   │   └── conexao.js              # Pool de conexões assíncronas com o MySQL
│   ├── models/
│   │   └── professorModel.js       # Camada de persistência e execução de queries SQL puras
│   ├── routes/
│   │   └── professorRoutes.js      # Mapeamento dos endpoints e verbos HTTP
│   └── app.js                      # Configuração centralizada dos middlewares do Express
├── package.json                    # Definição de dependências e scripts do projeto
└── server.js                       # Inicialização e escuta do servidor na porta 3000
```

## Estrutura do Banco de Dados

A persistência utiliza o banco relacional MySQL. Abaixo está o script DDL obrigatório utilizado para a criação do esquema e da tabela estruturada:

```sql
CREATE DATABASE IF NOT EXISTS escola;

USE escola;

CREATE TABLE IF NOT EXISTS professores (
 id INT PRIMARY KEY AUTO_INCREMENT,
 nome VARCHAR(100) NOT NULL,
 disciplina VARCHAR(100) NOT NULL,
 email VARCHAR(100) NOT NULL,
 salario DECIMAL (10,2) NOT NULL
);
```

## Executando o Projeto Localmente

Clone o repositório em sua máquina:

```bash
git clone https://github.com/DhiegoCavalcanti/projeto-api-professores.git
```

Acesse o diretório do projeto:

```bash
cd projeto-api-professores
```

Instale as dependências locais mapeadas no package.json:

```bash
npm install
```

Configure as credenciais do seu banco de dados MySQL local dentro do arquivo `src/database/conexao.js`.

Inicie o servidor em ambiente de desenvolvimento (nodemon):

```bash
npm run dev
```

## Demonstração da API (Postman)

Todas as funcionalidades do CRUD foram validadas no software **Postman** utilizando payloads estruturados em formato `JSON`.

### 1. Cadastrar Professor (POST /professores)

Responsável por inserir novos professores na tabela com validação de dados.

* Cadastro do Professor 1 (Evandro de Lima Rodrigues):

![Cadastro do Professor 1 (Evandro de Lima Rodrigues](img/Cadastro%20do%20Professor%201%20(Evandro%20de%20Lima%20Rodrigues).png)

* Cadastro do Professor 2 (Fulano da Silva):

![Cadastro do Professor 2 (Fulano da Silva](img/Cadastro%20do%20Professor%202%20(Fulano%20da%20Silva).png)

* Cadastro do Professor 3 (Siclano Pereira):

![Cadastro do Professor 3 (Siclano Pereira)](img/Cadastro%20do%20Professor%203%20(Siclano%20Pereira).png)

### 2. Listar Todos os Professores (GET /professores)

Recupera todos os registros existentes no banco de dados.

![Listagem completa dos Professores](img/Listagem%20completa%20dos%20Professores.png)

### 3. Buscar Professor por ID (GET /professores/:id)

Filtra e retorna as informações detalhadas de um professor específico com base no parâmetro informado na URL.

* Busca pelo ID 1:

![Busca pelo ID 1](img/Busca%20pelo%20ID%201.png)

* Busca pelo ID 2:

![Busca pelo ID 2](img/Busca%20pelo%20ID%202.png)

* Busca pelo ID 3:

![Busca pelo ID 3](img/Busca%20pelo%20ID%203.png)

### 4. Atualizar Professor (PUT /professores/:id)

Edita as informações cadastrais de um registro existente específico com base no parâmetro informado na URL.

![Atualização efetuada com sucesso (Professor ID 1)](img/Atualização%20efetuada%20com%20sucesso%20(Professor%20ID%201).png)
![Listagem completa dos Professores após atualização](img/Listagem%20completa%20dos%20Professores%20após%20atualização.png)
![Busca pelo ID 1 apóes atualização](img/Busca%20pelo%20ID%201%20após%20atualização.png)

### 5. Deletar Professor (DELETE /professores/:id)

Remove permanentemente o registro de um professor específico com base no parâmetro informado na URL.

* Remoção efetuada com sucesso (Professor ID 2):

![Remoção efetuada com sucesso (Professor ID 2)](img/Remoção%20efetuada%20com%20sucesso%20(Professor%20ID%202).png)
![Listagem completa dos Professores após remoção](img/Listagem%20completa%20dos%20Professores%20após%20remoção.png)

### 6. Tratamentos de Erro

* Professor não encontrado para busca:

![Professor não encontrado para busca](img/Tratamento%20de%20Erro%20-%20Professor%20não%20encontrado%20para%20busca.png)

* Professor não encontrado para atualização:

![Professor não encontrado para atualização](img/Tratamento%20de%20Erro%20-%20Professor%20não%20encontrado%20para%20atualização.png)

* Professor não encontrado para remoção:

![Professor não encontrado para remoção](img/Tratamento%20de%20Erro%20-%20Professor%20não%20encontrado%20para%20remoção.png)
