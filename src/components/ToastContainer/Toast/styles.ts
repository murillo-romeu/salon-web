import styled, { css } from 'styled-components';

interface ContainerProps {
  type?: 'success' | 'error' | 'warning' | 'info';
  hasDescription: boolean;
}

const toastTypeVariations = {
  info: css`
    background-color: #E7D0F1;
    color: #9B51E0;
  `,
  success: css`
    background-color: #D0F1DE;
    color: #00461E;
  `,
  error: css`
    background-color: #F1D0D7;
    color: #FF007F;
  `,
  warning: css`
    background-color: #F0F3B7;
    color: #878C00;
  `,
};

export const Container = styled.div<ContainerProps>`
  width: 360px;

  position: relative;
  padding: 16px 30px 16px 16px;
  border-radius: 10px;
  box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.2);

  display: flex;

  & + div {
    margin-top: 8px;
  }

  ${(props) => toastTypeVariations[props.type || 'info']}

  > svg {
    margin: 4px 12px 0 0;
  }

  div {
    flex: 1;

    p {
      margin-top: 4px;
      font-size: 14px;
      opacity: 0.8;
      line-height: 20px;
    }
  }

  button {
    position: absolute;
    right: 16px;
    top: 15px;
    opacity: 0.6;
    border: 0;
    background: transparent;
    color: inherit;
  }

  ${(props) => !props.hasDescription && css`
    align-items: center;

    svg {
      margin-top: 0;
    }
  `}
`;
