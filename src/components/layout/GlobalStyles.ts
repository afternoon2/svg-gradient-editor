import { createGlobalStyle } from 'styled-components';
import { fontFace } from '../../styles/fontFace';

export const GlobalStyles = createGlobalStyle`

  ${fontFace};

  body {
    margin: 0;
    padding: 0;
    font-family: 'Open Sans', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  code {
    font-family: 'Fira Mono', source-code-pro, Menlo, Monaco, Consolas, 'Courier New', monospace;
  }
`;
