import { createGlobalStyle } from 'styled';
import { normalize } from 'polished';

const GlobalStyle = createGlobalStyle`
  ${normalize()}
`;

export default GlobalStyle;
