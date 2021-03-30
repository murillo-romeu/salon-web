import styled from 'styled-components';

export const Container = styled.div`

  background-color: #232129;
  border-radius: 10px;
  border: 2px solid #232129;
  padding: 16px;
  width: 100%;
  color: #666360;

  & + div {
    margin-top: 8px;
  }

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
