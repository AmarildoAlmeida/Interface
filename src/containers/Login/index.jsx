import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { toast } from 'react-toastify';

import Logo from '../../assets/logo.svg';
import { Button } from '../../components/Button';
import { api } from '../../services/api';
import {
  Container,
  Form,
  InputContainer,
  LeftContainer,
  RightContainer,
  Title,
} from './styles';

export function Login() {
  const schema = yup
    .object({
      email: yup.string().email('Digite um E-mail válido').required('O E-mail é obrigatório'),
      password:yup.string().min(6, 'A senha deve ter 6 caracteres').required('Digite uma senha'),
    })
    .required();
  
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  console.log(errors);

  const onSubmit = async (data) => {
   const response= await toast.promise(
    api.post('/session', {
      email:data.email,
      password:data.password,
    }),
    {
      pending:'Verificando seus dados',
      success: 'Seja Bem -Vindo',
      error: 'Email ou senha Incorretos',
    },
   );

    console.log(response);
  };

  return (
    <Container>
      <LeftContainer>
        <img src={Logo} alt="logo-dev" />
      </LeftContainer>
      <RightContainer>
        <Title>
          Olá, seja bem vindo ao <span> Dev Burguer!</span>
          <br />
          Acesse com seu <span> Login e senha.</span>
        </Title>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <InputContainer>
            <label> Email </label>
            <input type="email" {...register('email')} />
          <p>{errors?.email?.message}</p>
          </InputContainer>

          <InputContainer>
            <label> Senha </label>
            <input type="password" {...register('password')} />
            <p>{errors?.password?.message}</p>
          </InputContainer>
          <Button type="submit">Entra</Button>
        </Form>
        <p>
          Não possui conta? <a>Cique aqui.</a>
        </p>
      </RightContainer>
    </Container>
  );
}