import React from 'react';
import {
  FiArrowLeft, FiMail, FiLock, FiUser,
} from 'react-icons/fi';
import logo from '../../assets/logo.svg';
import { Container, Content, Background } from './styles';
import Button from '../../components/Button';
import Input from '../../components/Input';

const SignUp: React.FC = () => (
  <Container>
    <Background />
    <Content>
      <img src={logo} height={120} alt="Salon" />
      <form>
        <h2>FAÇA SEU CADASTRO</h2>
        <Input name="name" icon={FiUser} placeholder="Nome" />
        <Input name="email" icon={FiMail} placeholder="E-mail" />
        <Input
          name="password"
          icon={FiLock}
          type="password"
          placeholder="Senha"
        />
        <Button type="submit"> Cadastrar </Button>
      </form>
      <a href="forgot">
        <FiArrowLeft />
        Voltar para logon
      </a>
    </Content>
  </Container>
);

export default SignUp;
