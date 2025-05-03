import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';
import { COLORS } from '../../styles/colors';

const spin = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const Spinner = styled.div`
  width: 40px;
  height: 40px;
  border: 4px solid transparent;
  border-top: 4px solid ${COLORS.primary[10]};
  border-radius: 50%;
  animation: ${spin} 1s linear infinite;
`;
