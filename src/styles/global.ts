import styled from '@emotion/styled';
import { fontFace } from './fonts';

export const GlobalStyle = styled.div`
  ${fontFace}

  * {
    font-family:
      'Pretendard',
      -apple-system,
      BlinkMacSystemFont,
      system-ui,
      Roboto,
      sans-serif;
  }
`;
