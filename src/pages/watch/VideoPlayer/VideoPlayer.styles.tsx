import styled from '@emotion/styled';
import { COLORS } from '@/styles/colors';

export const Container = styled.div`
  background-color: ${COLORS.base.black};
  iframe {
    width: 100%;
    height: calc(100dvh - 100px);
  }
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  height: 100px;
  padding: 24px;
`;

export const GoBack = styled.button`
  background: 0 0;
  border: 0;
  outline: none;
  padding: 0;
  color: ${COLORS.base.white};
  cursor: pointer;
`;
