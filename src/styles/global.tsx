import { css, Global } from '@emotion/react';
import { fontFace } from './fonts';

const globalCSS = css`
  ${fontFace}

  * {
    font-family:
      'Pretendard',
      -apple-system,
      BlinkMacSystemFont,
      system-ui,
      Roboto,
      sans-serif;
    box-sizing: border-box;
  }
`;

export const GlobalStyle = () => <Global styles={globalCSS} />;
