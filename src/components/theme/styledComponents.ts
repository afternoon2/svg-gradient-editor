import * as styledComponents from 'styled-components';
import { ThemedStyledComponentsModule } from 'styled-components';
import { AppTheme } from './interfaces';

const {
  default: styled,
  css,
  createGlobalStyle,
  keyframes,
  ThemeProvider,
  ThemeContext,
} = styledComponents as ThemedStyledComponentsModule<AppTheme>;

export { css, createGlobalStyle, keyframes, ThemeProvider, ThemeContext };

export default styled;
