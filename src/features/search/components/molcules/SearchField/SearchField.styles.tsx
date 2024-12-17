import styled from '@emotion/styled';
import { getFontStyle } from '@/styles/typography';
import { COLORS } from '@/styles/colors';

export const Form = styled.form`
  position: relative;
  width: 264px;
`;

export const Label = styled.label`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 8px;
  height: 36px;
  padding: 8px 12px;
  border-radius: 8px;
  overflow: hidden;
  border-radius: 8px;
  background-color: ${COLORS.background[50]};
  color: ${COLORS.gray[60]};
`;

export const Input = styled.input`
  width: 100%;
  color: ${COLORS.base.white};
  appearance: none;
  background: 0 0;
  border: 0;
  outline: none;
  margin: 0;
  padding: 0;
  ${getFontStyle('body', 'medium')};

  &::placeholder {
    color: ${COLORS.gray[60]};
  }
`;

export const ClearBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background: 0 0;
  border: 0;
  outline: none;
  margin: 0;
  padding: 0;
  cursor: pointer;
  svg {
    color: ${COLORS.gray[60]};
  }
`;
