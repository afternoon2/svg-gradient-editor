import { createGlobalStyle } from '../../styles/styledComponents';
import { typography } from '../../styles/typography';

export const GlobalStyles = createGlobalStyle`

  ${typography};

  html {
    margin: 0;
    padding: 0;
  }

  body {
    margin: 0;
    padding: 0;
    background-color: ${props => props.theme.colors.main_400};
    font-family: 'Open Sans', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`;
