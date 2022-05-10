const mongoose = require("mongoose");
const TipoRequisicaoSchema = new mongoose.Schema({
 descricao: { type: String, required: true },
});
module.exports = mongoose.model("TipoRequisicao", TipoRequisicaoSchema); 