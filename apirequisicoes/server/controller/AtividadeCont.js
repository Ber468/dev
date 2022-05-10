const Atividade = require('../model/AtividadeSchema');
module.exports = {
 listar: async (req, res) => {
    Atividade.find((err, objetos) => {
 (err ? res.status(400).send(err) : res.status(200).json(objetos));
 }).populate('Colaborador').populate('Requisicao').sort({ nome: 1 }); // -1 decrescente 1 crescente
 },

 incluir: async (req, res) => {
    let obj = new Atividade(req.body);
    obj.save((err, obj) => {
    (err ? res.status(400).send(err) : res.status(200).json(obj));
    });
    },
   
    alterar: async (req, res) => {
        let obj = new Atividade(req.body);
        Atividade.updateOne({ _id: obj._id }, obj, function (err) {
        (err ? res.status(400).send(err) : res.status(200).json(obj));
        });
        },

    excluir: async (req, res) => {
        Atividade.deleteOne({ _id: req.params.id }, function (err) {
        (err ? res.status(400).send(err) : res.status(200).json("message:ok"));
        });
        },

    obterPeloId: async (req, res) => {
        Atividade.findOne({ _id: req.params.id }, function (err,obj) {
            if (err) {
                res.status(400).send(err)
            } else {
                res.json(obj)
            
            }
        })
},

    filtrar: async (req, res) => {
            Atividade.find({
            $or: [
            { titulo: { $regex: req.params.filtro, $options: "i" } },
            { descricao: { $regex: req.params.filtro, $options: "i" } },
            { status: { $regex: req.params.filtro, $options: "i" } },
            { prazo: { $regex: req.params.filtro, $options: "i" } },
            { agendaInicio: { $regex: req.params.filtro, $options: "i" } },
            { dataHoraTermino: { $regex: req.params.filtro, $options: "i" } },
            ],
            }, function (err, obj) {
                if (err) {
                    res.status(400).send(err)
                } else {
                    res.json(obj)
                
                }
            }).sort({ nome: -1 }); // -1 decrescente 1 crescente
}
};