import styled from 'styled-components';

export const Container = styled.div`
  position: relative;

  span {
    width: 160px;
    background: #9B51E0;
    padding: 8px;
    border-radius: 4px;
    font-size: 14px;
    font-weight: 500;
    opacity: 0;
    transition: opacity 0.4s;
    visibility: hidden;

    position: absolute;
    bottom: calc(100% + 12px);
    left: 50%;
    transform: translateX(-50%);

    color: #ffffff;

    &::before {
      content: '';
      border-style: solid;
      border-color: #9B51E0 transparent;
      border-width: 6px 6px 0 6px;
      top: 100%;
      position: absolute;
      left: 50%;
      transform: translate(-50%)
    }
  }

  &:hover span {
    opacity: 1;
    visibility: visible;
  }

`;
