import { useForm, SubmitHandler, Controller } from "react-hook-form";

import { Button } from "../../../components/Button";
import { Input } from "../../../components/Input";

import { Container } from "./styles";

interface Inputs {
  nome: string;
  email: string;
  senha: string;
  confirmacaoSenha: string;
}

interface RegisterProps {

}

export function Register(props: RegisterProps) {
  const { control, handleSubmit, formState: { errors } } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = data => console.log(data);

  return (
    <Container onSubmit={handleSubmit(onSubmit)}>
      <h1>Criar uma conta</h1>

      <label htmlFor='nome'>Nome:</label>
      <Controller
        name='nome'
        control={control}
        // rules={{ required: true }}
        defaultValue=''
        render={({ field }) => <Input {...field} />}
      />

      <label htmlFor='email'>Email:</label>
      <Controller
        name='email'
        control={control}
        defaultValue=''
        render={({ field }) => <Input {...field} />}
      />

      <label htmlFor='senha'>Senha:</label>
      <Controller
        name='senha'
        control={control}
        defaultValue=''
        render={({ field }) => <Input type='password' {...field} />}
      />

      <label htmlFor='confirmacao-senha'>Confirme a senha:</label>
      <Controller
        name='confirmacaoSenha'
        control={control}
        defaultValue=''
        render={({ field }) => <Input type='password' {...field} />}
      />

      <Button type='submit'>
        Cadastrar
      </Button>
    </Container>
  );
}