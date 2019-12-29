import { createGlobalStyle } from './styledComponents';
import { normalize } from 'polished';

const GlobalStyle = createGlobalStyle`
  ${normalize()}
`;

export default GlobalStyle;
