import { css } from '@emotion/react';

export const resetButtonStyle = css`
  background: 0;
  border: 0;
  outline: none;
  cursor: pointer;
`;

export const hoverDimEffect = css`
  position: relative;
  display: block;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.3);
    opacity: 0;
    transition: opacity 0.2s ease;
  }

  &:hover::before {
    opacity: 1;
  }
`;
