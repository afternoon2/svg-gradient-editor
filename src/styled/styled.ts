import * as styledComponents from 'styled-components';
import { AppTheme } from 'themes';

const {
  default: styled,
  css,
  createGlobalStyle,
  keyframes,
  ThemeProvider,
  ThemeContext,
} = styledComponents as styledComponents.ThemedStyledComponentsModule<AppTheme>;

export {
  css, createGlobalStyle, keyframes, ThemeProvider, ThemeContext,
};

export default styled;
