import styled from '@emotion/styled';
import { getFontStyle } from '@/styles/typography';
import { COLORS } from '@nangniya/ui';

interface IButtonProps {
  $isActive: boolean;
}

export const Button = styled.button<IButtonProps>`
  padding: 8px 16px;
  background-color: ${({ $isActive }) => ($isActive ? COLORS.base.white : COLORS.base.black)};
  ${getFontStyle('label', 'large')};
  border: 2px solid ${({ $isActive }) => ($isActive ? COLORS.base.white : COLORS.background[70])};
  border-radius: 24px;
  color: ${({ $isActive }) => ($isActive ? COLORS.base.black : COLORS.gray[70])};
  cursor: pointer;

  &:hover {
    border-color: ${({ $isActive }) => ($isActive ? COLORS.base.white : COLORS.gray[60])};
  }
`;
