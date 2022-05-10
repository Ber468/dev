const express = require('express');
const routes = express.Router();
const controle = require('../controller/TipoRequisicaoCont');


routes.route('/TipoRequisicoes').get(controle.listar);
routes.route('/TipoRequisicoes').post(controle.incluir);
routes.route('/TipoRequisicoes').put(controle.alterar);
routes.route('/TipoRequisicoes/:id').delete(controle.excluir);
routes.route('/TipoRequisicoes/:id').get(controle.obterPeloId);
routes.route('/TipoRequisicoes/filtro/:filtro').get(controle.filtrar);



module.exports = routes; 