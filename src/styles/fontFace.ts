import { css } from './styledComponents';

export const fontFace = css`
  /* fira-mono-regular - latin */
  @font-face {
    font-family: 'Fira Mono';
    font-style: normal;
    font-weight: 400;
    src: local('Fira Mono Regular'), local('FiraMono-Regular'),
        url('../fonts/fira-mono-v6-latin/fira-mono-v6-latin-regular.woff2') format('woff2'), /* Chrome 26+, Opera 23+, Firefox 39+ */
        url('../fonts/fira-mono-v6-latin/fira-mono-v6-latin-regular.woff') format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
  }
  /* fira-mono-700 - latin */
  @font-face {
    font-family: 'Fira Mono';
    font-style: normal;
    font-weight: 700;
    src: local('Fira Mono Bold'), local('FiraMono-Bold'),
        url('../fonts/fira-mono-v6-latin/fira-mono-v6-latin-700.woff2') format('woff2'), /* Chrome 26+, Opera 23+, Firefox 39+ */
        url('../fonts/fira-mono-v6-latin/fira-mono-v6-latin-700.woff') format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
  }

  /* open-sans-300 - latin */
  @font-face {
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 300;
    src: local('Open Sans Light'), local('OpenSans-Light'),
        url('../fonts/open-sans-v15-latin/open-sans-v15-latin-300.woff2') format('woff2'), /* Chrome 26+, Opera 23+, Firefox 39+ */
        url('../fonts/open-sans-v15-latin/open-sans-v15-latin-300.woff') format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
  }
  /* open-sans-regular - latin */
  @font-face {
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 400;
    src: local('Open Sans Regular'), local('OpenSans-Regular'),
        url('../fonts/open-sans-v15-latin/open-sans-v15-latin-regular.woff2') format('woff2'), /* Chrome 26+, Opera 23+, Firefox 39+ */
        url('../fonts/open-sans-v15-latin/open-sans-v15-latin-regular.woff') format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
  }
  /* open-sans-700 - latin */
  @font-face {
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 700;
    src: local('Open Sans Bold'), local('OpenSans-Bold'),
        url('../fonts/open-sans-v15-latin/open-sans-v15-latin-700.woff2') format('woff2'), /* Chrome 26+, Opera 23+, Firefox 39+ */
        url('../fonts/open-sans-v15-latin/open-sans-v15-latin-700.woff') format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
  }
`;