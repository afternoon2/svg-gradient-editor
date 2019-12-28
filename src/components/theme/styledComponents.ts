import * as styledComponents from 'styled-components';
import { ThemedStyledComponentsModule } from 'styled-components';
import { AppTheme } from './interfaces';

const {
  default: styled,
  css,
  createGlobalStyle,
  keyframes,
  ThemeProvider,
} = styledComponents as ThemedStyledComponentsModule<AppTheme>;

export { css, createGlobalStyle, keyframes, ThemeProvider };

export default styled;
