import styled, { css } from 'styled-components';

interface ContainerProps {
  type?: 'success' | 'error' | 'warning' | 'info';
  hasDescription: number;
}

const toastTypeVariations = {
  info: css`
    background-color: #e7d0f1;
    color: #9b51e0;
  `,
  success: css`
    background-color: #d0f1de;
    color: #00461e;
  `,
  error: css`
    background-color: #f1d0d7;
    color: #ff007f;
  `,
  warning: css`
    background-color: #f0f3b7;
    color: #878c00;
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

  ${(props) =>
    !props.hasDescription &&
    css`
      align-items: center;

      svg {
        margin-top: 0;
      }
    `}
`;
