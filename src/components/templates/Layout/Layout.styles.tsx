import { COLORS } from '@/styles/colors';
import styled from '@emotion/styled';

export const OuterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${COLORS.base.black};
`;

export const InnerWrapper = styled.main`
  margin-top: 72px;
`;
