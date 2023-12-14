import { useForm } from "react-hook-form";
import { api } from "../config_axios";
import { useState } from "react";

const Cadastrar_tarefa = () => {
  const { register, handleSubmit, reset} = useForm();
  const [aviso, setAviso] = useState("");

  const salvar = async (campos) => {
    try {
      const response = await api.post("tarefas", campos);
      setAviso(`Tarefa cadastrada com sucesso!"`);
      reset();
    } catch (error) {
      setAviso("Erro ao cadastrar tarefa!");
    }
  };

  return (
    <div className="container-fluid bg-dark text-light min-vh-100 d-flex align-items-center">
      <div className="container p-5 bg-light text-dark rounded">
        <h4 className="fst-italic mb-3">Cadastrar Tarefa</h4>
        <form onSubmit={handleSubmit(salvar)}>
          <div className="form-group">
            <label htmlFor="titulo">Titulo</label>
            <input
              type="text"
              className="form-control"
              id="titulo"
              required
              autoFocus
              {...register("titulo")}
            />
          </div>
          <div className="form-group mt-2">
            <label htmlFor="descricao">Descrição</label>
            <input
              type="text"
              className="form-control"
              id="descricao"
              required
              {...register("descricao")}
            />
          </div>
          <div className="form-group mt-2">
            <label htmlFor="status">Status:</label>
            <input
              type="text"
              className="form-control"
              id="status"
              required
              {...register("status")}
            />
          </div>
          <div className="row mt-2">
            <div className="col-sm-4">
              <div className="form-group">
                <label htmlFor="data_criacao">Data de Criação</label>
                <input
                  type="date"
                  className="form-control"
                  id="data_criacao"
                  required
                  {...register("data_criacao")}
                />
              </div>
            </div>
          </div>
          <div className="row mt-2">
            <div className="col-sm-4">
              <div className="form-group">
                <label htmlFor="data_limite">Data Limite</label>
                <input
                  type="date"
                  className="form-control"
                  id="data_limite"
                  required
                  {...register("data_limite")}
                />
              </div>
            </div>
          </div>
          <input
            type="submit"
            className="btn btn-primary mt-3"
            value="Enviar"
          />
          <input
            type="reset"
            className="btn btn-danger mt-3 ms-3"
            value="Limpar"
          />
        </form>
        <div className="alert mt-3">{aviso}</div>
      </div>
    </div>
  );
};

export default Cadastrar_tarefa;
