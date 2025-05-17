import styled from '@emotion/styled';
import { getFontStyle } from '@/styles/typography';
import { COLORS } from '@nangniya/ui';
import { resetButtonStyle } from '@/styles/common';

export const Button = styled.button<{ $isActive: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 14px 20px;
  ${({ $isActive }) => ($isActive ? getFontStyle('body', 'large') : getFontStyle('title', 'small'))};
  color: ${({ $isActive }) => ($isActive ? COLORS.base.white : COLORS.gray[40])};
  ${resetButtonStyle};
  border-bottom: ${({ $isActive }) => ($isActive ? `2px solid ${COLORS.base.white}` : 'none')};
`;
