console.log("Server executado com sucesso...");

// usar o express
const express = require('express');
const app = express();
app.use(express.json()); // para tratar json
// definir porta para a API de serviço
const port = process.env.PORT || 3000;

// usar o momgo
require("./server/banco/mongo");
// Usar as rotas
const routes = require('./server/routes/index');
app.use(routes);


app.listen(port, () => {
 return console.log('API executando na porta ' + port);
});