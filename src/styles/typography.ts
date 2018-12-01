import { css } from 'styled-components';
import { modularScale } from 'polished';

const modularSize = (size: number): string => modularScale(size, 1, 'minorThird');

export const typography = css`

  h1, h2, h3, h4, h5, h6, code {
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

  p, label, span, dl, dd, dt {
    font-family: 'Open Sans', sans-serif;
    font-size: ${modularSize(0)};
  }


`;
