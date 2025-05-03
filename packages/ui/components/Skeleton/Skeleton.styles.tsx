import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';
import { COLORS } from '../../styles/colors';

const blink = keyframes`
  0% {
    background-color: ${COLORS.gray[10]};
  }
  50% {
    background-color: ${COLORS.gray[20]};
  }
  100% {
    background-color: ${COLORS.gray[10]};
  }
`;

export const SkeletonWrapper = styled.div<{ $width: number; $height: number }>`
  background-color: ${COLORS.gray[10]};
  width: ${({ $width }) => `${$width}px`};
  height: ${({ $height }) => `${$height}px`};
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: ${COLORS.gray[10]};
    animation: ${blink} 1.5s ease-in-out infinite;
  }
`;
