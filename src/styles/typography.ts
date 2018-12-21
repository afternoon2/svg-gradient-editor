import { css } from './styledComponents';
import { modularScale } from 'polished';

export const modularSize = (size: number): string => modularScale(size, 1, 'minorThird');

export const typography = css`

  h1, h2, h3, h4, h5, h6, code,
  label, span, a, dd, dt, dl, pre {
    color: ${props => props.theme.colors.text};
  }

  h1, h2, h3, h4, h5, h6, code, legend, p {
    font-family: 'Fira Mono', source-code-pro, Menlo, Monaco, Consolas, 'Courier New', monospace;
  }

  h1 {
    font-size: ${modularSize(5)};
  }

  h2 {
    font-size: ${modularSize(4)}
  }

  h3 {
    font-size: ${modularSize(3)}
  }

  h4 {
    font-size: ${modularSize(2)};
  }

  h5 {
    font-size: ${modularSize(1)};
  }

  h6 {
    font-size: ${modularSize(0)};
  }

  p, label, span, dl, dd, dt, a {
    font-size: ${modularSize(0)};
    letter-spacing: .035em;
  }

  label, span, dd, dt, a {
    font-family: 'Open Sans', sans-serif;
  }

  legend {
    font-size: ${modularSize(0)};
  }

`;
