import { Link } from 'react-router-dom';
import styled from '@emotion/styled';
import { getFontStyle } from '@/styles/typography';
import { COLORS } from '@/styles/colors';

interface IContainerProps {
  $isActive: boolean;
}

export const Container = styled(Link)<IContainerProps>`
  position: relative;
  ${({ $isActive }) => ($isActive ? getFontStyle('body', 'large') : getFontStyle('title', 'medium'))};
  padding: 16px;
  text-decoration: none;
  color: ${({ $isActive }) => ($isActive ? COLORS.base.white : COLORS.gray[60])};

  &:hover {
    ${({ $isActive }) => $isActive && getFontStyle('title', 'medium')};
    color: ${({ $isActive }) => $isActive && COLORS.gray[60]};
  }

  &:hover::before {
    opacity: ${({ $isActive }) => ($isActive ? 1 : 1)};
  }

  &::before {
    position: absolute;
    bottom: -5px;
    left: 50%;
    transform: translate(-50%, -50%);
    content: '';
    width: ${({ $isActive }) => ($isActive ? '100%' : '48px')};
    height: ${({ $isActive }) => ($isActive ? '3px' : '2px')};
    background-color: ${({ $isActive }) => ($isActive ? COLORS.base.white : COLORS.gray[60])};
    opacity: ${({ $isActive }) => ($isActive ? 1 : 0)};
    border-radius: 4px;
    transition: opacity 0.1s;
  }
`;
