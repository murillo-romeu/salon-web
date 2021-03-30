import styled from 'styled-components';
import { shade } from 'polished';
import signUpBackground from '../../assets/sign-up-bg.jpg';

export const Container = styled.div`
  height: 100vh;

  display: flex;
  align-items: stretch;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  place-content: center;

  width: 100%;
  max-width: 500px;

  form {
    margin: 80px 0;
    width: 340px;
    text-align: center;

    h2 {
      margin-bottom: 24px;
    }

    a {
      color: #ffffff;
      display: block;
      margin-top: 24px;
      text-decoration: none;
      transition: background-color 0.2s;

      &:hover {
        color: ${shade(0.2, '#ffffff')}
      }
    }
  }

  > a {
    color: #ffffff;
    display: block;
    margin-top: 24px;
    text-decoration: none;
    transition: background-color 0.2s;

    display: flex;
    align-items: center;

    svg {
      margin-right: 16px;
    }

    &:hover {
      color: ${shade(0.2, '#ffffff')}
    }
  }

`;

export const Background = styled.div`
  flex: 1;
  background: url(${signUpBackground}) no-repeat center;
  background-size: cover;
`;
