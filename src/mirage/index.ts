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
        'Lorem Ipsum has been.',
        imagem: 'https://www.kindpng.com/picc/m/232-2'
      })

      server.create("especialidade", { 
        nome: 'Corte de tesoura', 
        descricao: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'+
        'Lorem Ipsum has been.',
        imagem: 'data:image/png;base64,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'
      })

      server.create("especialidade", { 
        nome: 'Barba', 
        descricao: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'+
        'Lorem Ipsum has been.',
        imagem: 'https://www.kindpng.com/picc/m/232-2327063_transparent-barber-razor-png-png-download.png'
      })

      server.create("especialidade", { 
        nome: 'Lavagem', 
        descricao: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'+
        'Lorem Ipsum has been.',
        imagem: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTivrsaV4PiXWMsoin1aVzyOM3ap_TtfWgfUw&usqp=CAU'
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
      this.post("/usuarios")

      this.get("/agendamentos")
    },
  });

  return server;
}