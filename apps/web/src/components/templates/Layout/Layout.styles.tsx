import { COLORS } from '@nangniya/ui';
import styled from '@emotion/styled';

export const OuterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${COLORS.base.black};
  min-height: calc(100dvh);
`;

export const InnerWrapper = styled.main`
  margin-top: 72px;
`;

export const InnerContainer = styled.div`
  margin: 0 auto;
  max-width: 1600px;
`;
