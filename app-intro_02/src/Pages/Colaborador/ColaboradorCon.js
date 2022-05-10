import React, { useState, useEffect, useRef } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import ColaboradorList from "./ColaboradorList";
import ColaboradorForm from "./ColaboradorForm";
import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import { Toast } from "primereact/toast";
import { ConfirmDialog } from "primereact/confirmdialog";
import ColaboradorSrv from "./ColaboradorSrv";

function ColaboradorCon() {
  const [colaboradores, setColaboradores] = useState([]);
  const toastRef = useRef();
  const [visible, setVisible] = useState({visible: false});
  useEffect(() => {
    onClickAtualizar(); // ao inicializar execula método para atualizar
  }, []);
  const onClickAtualizar = () => {
    ColaboradorSrv.listar()
      .then((response) => {
        setColaboradores(response.data);
        toastRef.current.show({
          severity: "success",
          summary: "Colaboradores atualizados",
          life: 3000,
        });
      })
      .catch((e) => {
        toastRef.current.show({
          severity: "error",
          summary: e.message,
          life: 3000,
        });
      });
  };

  // operação inserir
  const initialState = { id: null, nome: "", email: "", senha: "" };
  const [colaborador, setColaborador] = useState(initialState);
  const [editando, setEditando] = useState(false);
  const inserir = () => {
    setColaborador(initialState);
    setEditando(true);
  };
  const cancelar = () => {
    console.log("Cancelou ...");
    setEditando(false);
  };
  const salvar = () => {
    if (colaborador._id == null) {
      // inclussão
      ColaboradorSrv.incluir(colaborador)
        .then((response) => {
          setEditando(false);
          onClickAtualizar();
          toastRef.current.show({
            severity: "success",
            summary: "Salvou",
            life: 2000,
          });
        })
        .catch((e) => {
          toastRef.current.show({
            severity: "error",
            summary: e.message,
            life: 4000,
          });
        });
    } else {
      // alteração
      ColaboradorSrv.alterar(colaborador)
        .then((response) => {
          setEditando(false);
          onClickAtualizar();
          toastRef.current.show({
            severity: "success",
            summary: "Salvou",
            life: 2000,
          });
        })
        .catch((e) => {
          toastRef.current.show({
            severity: "error",
            summary: e.message,
            life: 4000,
          });
        });
    }
  };
  const editar = (id) => {
    
    setColaborador(initialState);
    ColaboradorSrv.obterPeloId(id)
    .then((response) => {
      setColaborador(response.data);
    })
    
    setEditando(true);

    }
  const excluirConfirm = (_id) => {
    ColaboradorSrv.excluir(_id)
      .then((response) => {
        onClickAtualizar();
        toastRef.current.show({
          severity: "success",
          summary: "Excluído",
          life: 2000,
        });
      })
      .catch((e) => {
        toastRef.current.show({
          severity: "error",
          summary: e.message,
          life: 4000,
        });
      });
  };

  const excluir = (_id) => {
    setVisible({visible: true, _id});
  };

  if (!editando) {
    return (
      <div className="App">
        <Toast ref={toastRef} />
        <ConfirmDialog
          visible={visible.visible}
          onHide={() => setVisible({visible: false})}
          message= "Confirma a exclusão?"
          header= "Confirmação"
          icon= "pi pi-question"
          accept= {() => excluirConfirm(visible._id)}
          
        />
        <ColaboradorList
          colaboradores={colaboradores}
          inserir={inserir}
          editar={editar}
          excluir={excluir}
        />
      </div>
    );
  } else {
    return (
      <div className="App">
        <Toast ref={toastRef} />
        <ColaboradorForm
          colaborador={colaborador}
          setColaborador={setColaborador}
          salvar={salvar}
          cancelar={cancelar}
        />
      </div>
    );
  }
}
export default ColaboradorCon;