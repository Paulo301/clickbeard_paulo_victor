import { api } from './api';

export interface IUsuario {
  id: number;
  nome: string;
  email: string;
  senha: string;
}

const userApi = {
  createUser: async (user: Partial<IUsuario>) => {
    const { data } = await api.post('usuarios', user);
    return data;
  },
};

export default userApi;