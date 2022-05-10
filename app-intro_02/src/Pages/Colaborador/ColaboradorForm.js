import React from "react";
const ColaboradorForm = (props) => {
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    props.setColaborador({ ...props.colaborador, [name]: value });
  };

  return (
    <form>
      <div class="form-group">
        <label>Nome</label>
        <input class="form-control" type="text" name="nome"
          value={props.colaborador.nome} onChange={handleInputChange}/>
      </div>
      <div class="form-group">
        <label>Email</label>
        <input class="form-control" type="text" name="email"
          value={props.colaborador.email} onChange={handleInputChange}/>
      </div>
      <div class="form-group">
        <label>Senha</label>
        <input class="form-control" type="text" name="senha"
          value={props.colaborador.senha} onChange={handleInputChange}/>
      </div>
      <div class="form-group">
        <button type="button" onClick={() => props.salvar(props.colaborador)}
          className="btn btn-primary btn-sm">Salvar</button>
        <button type="button" onClick={props.cancelar}
          className="btn btn-primary btn-sm">Cancelar</button>
      </div>
    </form>
  );
};
export default ColaboradorForm;
