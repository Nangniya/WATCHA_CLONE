import styled from '@emotion/styled';
import { COLORS } from '@nangniya/ui';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 32px;
`;

export const TabContainer = styled.section`
  position: sticky;
  top: 72px;
  padding: 24px 40px 18px 40px;
  background-color: ${COLORS.base.black};
  z-index: 5;
`;

export const TabUl = styled.ul`
  display: flex;
  gap: 10px;
`;

export const Hr = styled.hr`
  width: 100%;
  height: 1px;
  margin: 0;
  padding: 0;
  border: none;
  background-color: ${COLORS.gray[10]};
`;
