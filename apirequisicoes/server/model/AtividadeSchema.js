const mongoose = require("mongoose");
const AtividadeSchema = new mongoose.Schema({
 titulo: { type: String, required: true },
 descricao: { type: String, required: true },
 status: { type: String, required: true },
 prazo: { type: Date, required: true },
 agendaInicio: { type: Date, required: true },
 dataHoraTermino: { type: Date, required: true },
 Colaborador: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Colaborador',
    require: true,
    },
 Requisicao: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Requisicao',
        require: true,
   }
   
});
module.exports = mongoose.model("Atividade", AtividadeSchema);  