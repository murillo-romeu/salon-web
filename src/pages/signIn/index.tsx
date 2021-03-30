import React from 'react';
import { FiLogIn, FiMail, FiLock } from 'react-icons/fi';
import logo from '../../assets/logo.svg';
import { Container, Content, Background } from './styles';
import Button from '../../components/Button';
import Input from '../../components/Input';

const SignIn: React.FC = () => (
  <Container>
    <Content>
      <img src={logo} height={120} alt="Salon" />
      <form>
        <h2>ACESSO AO SISTEMA</h2>
        <Input name="email" icon={FiMail} placeholder="E-mail" />
        <Input
          name="password"
          icon={FiLock}
          type="password"
          placeholder="Senha"
        />
        <Button type="submit"> Entrar </Button>
        <a href="forgot">Esqueci a minha senha!</a>
      </form>
      <a href="forgot">
        <FiLogIn />
        Criar conta!
      </a>
    </Content>
    <Background />
  </Container>
);

export default SignIn;
