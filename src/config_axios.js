import axios from 'axios';

//criar uma instância Axios com a URL do back end
//baseURL é a porta que está rodando o backend
export const api = axios.create({
  baseURL: 'http://localhost:3001'
  //GET localhost:3001/livros
});