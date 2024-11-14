import Logo from '../../assets/logo.svg';
import {
  Button,
  Container,
  Form,
  InputContainer,
  LeftContainer,
  Link,
  RightContainer,
  Title,
} from './styles';

export function Login() {
  return (
    <Container>
      <LeftContainer>
        <img src={Logo} alt="logo-dev" />
      </LeftContainer>
      <RightContainer>
        <Title>
          Olá, seja bem vindo ao<span> Dev Burguer!</span> Acesse com seu
          <span>Login e senha.</span>
        </Title>
        <Form>
          <InputContainer>
            <label>Email</label>
            <input type="email" />
          </InputContainer>

          <InputContainer>
            <label>Senha</label>
            <input type="password" />
          </InputContainer>
          <Link>Esqueci minha senha.</Link>
          <Button>Entrar</Button>
        </Form>
        <Link> Não possui conta? Cique aqui</Link>
      </RightContainer>
    </Container>
  );
}
