const { Router } = require("express");
const routes = Router();


// Liberar origens para requisições
var cors = require('cors');
routes.use(cors({origin: '*'}));
//routes.use(cors({origin: 'http://localhost:3001'}));


const colaboradorRout = require("./ColaboradorRout");
routes.use("/api", colaboradorRout);

const solicitanteRout = require("./SolicitanteRout");
routes.use("/api", solicitanteRout); 

const TipoRequisicaoRout = require("./TipoRequisicaoRout");
routes.use("/api", TipoRequisicaoRout); 

const requisicaoRout = require("./RequisicaoRout");
routes.use("/api", requisicaoRout); 

const andamentoRout = require("./AndamentoRout");
routes.use("/api", andamentoRout); 

const atividadeRout = require("./AtividadeRout");
routes.use("/api", atividadeRout); 


module.exports = routes;