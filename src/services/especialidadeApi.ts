import { api } from './api';

export interface IEspecialidade {
  id: number;
  nome: string;
  descricao: string;
  imagem: string;
}

const especialidadeApi = {
  getEspecialidades: async (): Promise<{ especialidades: IEspecialidade[] }> => {
    const { data } = await api.get('especialidades');
    return data;
  },
};

export default especialidadeApi;