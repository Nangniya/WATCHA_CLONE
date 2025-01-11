import styled from '@emotion/styled';
import { getFontStyle } from '@/styles/typography';
import { COLORS } from '@/styles/colors';
import { resetButtonStyle } from '@/styles/common';

export const Overlay = styled.div`
  position: fixed;
  inset: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
`;

export const InnerContainer = styled.article`
  display: Flex;
  flex-direction: column;
  width: 400px;
`;

export const Text = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  ${getFontStyle('headline', 'medium')};
  background-color: ${COLORS.background[60]};
  color: ${COLORS.base.white};
  text-align: center;
  white-space: pre-line;
`;

export const BottomBar = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
  height: 50px;
  padding: 15px 18px;
  background-color: ${COLORS.background[30]};
`;

export const BottomBtn = styled.button`
  ${resetButtonStyle};
  ${getFontStyle('label', 'large')};
  color: ${COLORS.gray[60]};
`;
