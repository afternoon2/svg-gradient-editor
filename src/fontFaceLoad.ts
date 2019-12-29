const fontFace = `
@font-face {
  font-family: 'Rubik';
  font-style: normal;
  font-weight: 400;
  src: local('Rubik'), local('Rubik-Regular'),
       url('./fonts/rubik-v9-latin-regular.woff2') format('woff2'),
       url('./fonts/rubik-v9-latin-regular.woff') format('woff');
}
@font-face {
  font-family: 'Rubik';
  font-style: normal;
  font-weight: 500;
  src: local('Rubik Medium'), local('Rubik-Medium'),
       url('./fonts/rubik-v9-latin-500.woff2') format('woff2'),
       url('./fonts/rubik-v9-latin-500.woff') format('woff');
}:
`;

export default (): void => {
  const head: HTMLHeadElement = document.getElementsByTagName('head')[0];
  const style: HTMLStyleElement = document.createElement('style');
  style.innerHTML = fontFace;
  head.appendChild(style);
};
