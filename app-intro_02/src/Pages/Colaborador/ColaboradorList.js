const ColaboradorList = (props) => (
    <div>
      <h4>Listagem de colaboradores</h4>
      <button className="btn btn-success" onClick={props.inserir}>Inserir</button>
      <table className="table">
        <thead>
          <tr>
            {" "}
            <th>Index</th>
            <th>Id</th>
            <th>Nome</th>
            <th>Email</th>
            <th>Senha</th>
            <th>Operações</th>
          </tr>
        </thead>
        <tbody>
          {props.colaboradores.length > 0 ? (props.colaboradores.map((o, index) => (
              <tr key={index}>
                <td>{index}</td><td>{o.id}</td> <td>{o.nome}</td> <td>{o.email}</td><td>{o.senha}</td>
                <button onClick={() => props.editar(o._id)} className="btn btn-warning">Editar</button>
                <button onClick={() => props.excluir(o._id)} className="btn btn-danger">Excluir</button> 
              </tr>
            ))) : (
            <tr>
              <td colSpan={3}>Nenhum usuário.</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  )
  export default ColaboradorList
  