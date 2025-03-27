const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');  // Importa o pacote cors
const solicitacaoRoutes = require('./routes/solicitacao.js'); // Importa as rotas de solicitação

// Cria a aplicação Express
const app = express();

// Configura a porta do servidor
const PORT = 3000;

// Middleware para processar o corpo da requisição em formato JSON
app.use(bodyParser.json());

// Configuração do CORS
app.use(cors());  // Permite requisições de qualquer origem (origem do front-end)

// Usando a rota de solicitação de compra
app.use(solicitacaoRoutes);

// Inicia o servidor
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
