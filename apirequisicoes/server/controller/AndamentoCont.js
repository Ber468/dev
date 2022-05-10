const Andamento = require('../model/AndamentoSchema');
module.exports = {
 listar: async (req, res) => {
    Andamento.find((err, objetos) => {
 (err ? res.status(400).send(err) : res.status(200).json(objetos));
 }).populate('Colaborador').populate('Atividade').sort({ nome: 1 }); // -1 decrescente 1 crescente
 },

 incluir: async (req, res) => {
    let obj = new Andamento(req.body);
    obj.save((err, obj) => {
    (err ? res.status(400).send(err) : res.status(200).json(obj));
    });
    },
   
    alterar: async (req, res) => {
        let obj = new Andamento(req.body);
        Andamento.updateOne({ _id: obj._id }, obj, function (err) {
        (err ? res.status(400).send(err) : res.status(200).json(obj));
        });
        },

    excluir: async (req, res) => {
        Andamento.deleteOne({ _id: req.params.id }, function (err) {
        (err ? res.status(400).send(err) : res.status(200).json("message:ok"));
        });
        },

    obterPeloId: async (req, res) => {
        Andamento.findOne({ _id: req.params.id }, function (err,obj) {
            if (err) {
                res.status(400).send(err)
            } else {
                res.json(obj)
            
            }
        })
},

    filtrar: async (req, res) => {
            Andamento.find({
            $or: [
            { dataHora: { $regex: req.params.filtro, $options: "i" } },
            { titulo: { $regex: req.params.filtro, $options: "i" } },
            { descricao: { $regex: req.params.filtro, $options: "i" } },
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