import styled from '@emotion/styled';
import { getFontStyle } from '@/styles/typography';
import { COLORS } from '@/styles/colors';

interface IWrapperProps {
  $top: number;
  $left: number;
}

export const Wrapper = styled.div<IWrapperProps>`
  position: fixed;
  top: ${({ $top }) => $top}px;
  left: ${({ $left }) => $left}px;
  z-index: 10;
`;

export const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Arrow = styled.div`
  width: 18px;
  height: 18px;
  transform: rotate(45deg);
  background-color: ${COLORS.base.white};
`;

export const MessageBox = styled.div`
  position: absolute;
  top: 5px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
  min-width: 318px;
  max-width: 400px;
  padding: 10px 14px;
  background-color: ${COLORS.base.white};
  border-radius: 8px;
`;

export const Message = styled.p`
  ${getFontStyle('label', 'large')};
`;

export const CloseBtn = styled.button`
  height: 32px;
  padding: 0 12px;
  border: 0;
  border-radius: 4px;
  ${getFontStyle('label', 'medium')};
  background-color: ${COLORS.background[80]};
  color: ${COLORS.base.white};
  white-space: nowrap;
  cursor: pointer;

  &:hover {
    background-color: ${COLORS.background[100]};
  }
`;
