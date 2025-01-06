import styled from '@emotion/styled';
import { getFontStyle } from '@/styles/typography';
import { COLORS } from '@/styles/colors';

export const ErrorContainer = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 60vh;
  padding: 40px;
  color: ${COLORS.base.white};
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
`;

export const Title = styled.h2`
  ${getFontStyle('headline', 'medium')}
`;

export const Message = styled.p`
  ${getFontStyle('body', 'large')}
  color: ${COLORS.gray[60]};
`;

export const RetryButton = styled.button`
  ${getFontStyle('body', 'large')}
  padding: 12px 24px;
  color: ${COLORS.base.white};
  background: ${COLORS.primary[10]};
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background: ${COLORS.primary[40]};
  }
`;
