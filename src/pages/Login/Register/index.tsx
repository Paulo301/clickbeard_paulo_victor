import { useForm, SubmitHandler, Controller } from "react-hook-form";

import { useDispatch, useSelector } from 'react-redux';

import { Button } from "../../../components/Button";
import { Input } from "../../../components/Input";

import { IUserState } from '../../../store/user/userSlice';
import { registerUser } from '../../../store/user/userActions';

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
  const dispatch = useDispatch();

  const { control, handleSubmit, formState: { errors } } = useForm<Inputs>();
  const { loading, error } = useSelector<IUserState, any>(
    (state) => state
  );

  const onSubmit: SubmitHandler<Inputs> = data => {
    const { confirmacaoSenha, ...rest } = data;
    
    data.email = data.email.toLowerCase();
    

    // dispatch(registerUser(rest));
  }

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