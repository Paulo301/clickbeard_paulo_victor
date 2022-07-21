import { createServer, Model, Factory, hasMany, belongsTo } from 'miragejs';

export function makeServer({ environment = 'test' }) {
  const server = createServer({
    environment,
    models: {
      barbeiro: Model.extend({
        especialidades: hasMany(),
      }),
      especialidade: Model.extend({
        barbeiros: hasMany(),
      }),
      usuario: Model,
      agendamento: Model.extend({
        barbeiro: belongsTo(),
        especialidade: belongsTo(),
        usuario: belongsTo(),
      }),
    },

    factories: {
      especialidade: Factory.extend({
        nome: '',
        descricao: '',
        imagem: '',
      }),
      usuario: Factory.extend({
        nome: '',
        email: '',
        senha: '',
      }),
    },

    seeds(server) {
      server.create("especialidade", { 
        nome: 'Sobrancelha', 
        descricao: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'+
        'Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown ',
        imagem: ''
      })

      server.create("especialidade", { 
        nome: 'Corte de tesoura', 
        descricao: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'+
        'Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown ',
        imagem: ''
      })

      server.create("especialidade", { 
        nome: 'Barba', 
        descricao: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'+
        'Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown ',
        imagem: ''
      })

      server.create("especialidade", { 
        nome: 'Lavagem', 
        descricao: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'+
        'Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown ',
        imagem: ''
      })

      server.create("usuario", { nome: 'admin', email: 'admin@admin.com', senha: 'admin' })
    },

    routes() {
      this.namespace = "api"

      this.get("/barbeiros")
      this.post("/barbeiros")
  
      this.get("/especialidades")

      this.get("/usuarios/login", (schema, request) => {
        return [];
      })

      this.get("/agendamentos")
    },
  });

  return server;
}