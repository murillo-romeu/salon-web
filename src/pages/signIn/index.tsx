import React from 'react';
import { FiLogIn } from 'react-icons/fi';
import logo from '../../assets/logo.svg';
import { Container, Content, Background } from './styles';

const SignIn: React.FC = () => (
  <Container>
    <Content>
      <img src={logo} height={120} alt="Salon" />
      <form>
        <h2>ACESSO AO SISTEMA</h2>
        <input placeholder="E-mail" />
        <input type="password" placeholder="Senha" />
        <button type="submit"> Entrar </button>
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
