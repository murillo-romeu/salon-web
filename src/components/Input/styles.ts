import styled, { css } from 'styled-components';

interface ContainerProps{
  isFocused: boolean;
  isFilled: boolean;
}

export const Container = styled.div<ContainerProps>`
  background-color: #232129;
  border-radius: 10px;
  padding: 16px;
  width: 100%;

  border: 2px solid #232129;
  color: #666360;

  & + div {
    margin-top: 8px;
  }

  ${(props) => props.isFocused && css`
    color: #9B51E0;
    border-color: #9B51E0;
  `}

  ${(props) => props.isFilled && css`
    color: #9B51E0;
  `}

  display: flex;
  align-items: center;

  input {
    flex: 1;
    background: transparent;
    border: 0;
    color: #ffffff;

    &::placeholder {
      color: #666360;
    }
  }

  svg {
    margin-right: 16px;
  }

`;
