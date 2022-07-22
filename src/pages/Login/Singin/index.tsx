import { useForm, SubmitHandler, Controller } from "react-hook-form";

import { Button } from "../../../components/Button";
import { Input } from "../../../components/Input";

import { Container } from "./styles";

interface Inputs {
  email: string;
  senha: string;
}

interface SigninProps {

}

export function Signin(props: SigninProps) {
  const { handleSubmit, control, formState: { errors } } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = data => console.log(data);

  return (
    <Container onSubmit={handleSubmit(onSubmit)}>
      <h1>Entrar na conta</h1>

      <label htmlFor='email'>Email:</label>
      <Controller
        name="email"
        control={control}
        // rules={{ required: true }}
        defaultValue=''
        render={({ field }) => <Input {...field} />}
      />

      <label htmlFor='senha'>Senha:</label>
      <Controller
        name="senha"
        control={control}
        defaultValue=''
        render={({ field }) => <Input type='password' {...field} />}
      />

      <a href="#">Esqueci minha senha</a>

      <Button type='submit'>
        Entrar
      </Button>
    </Container>
  )
}