import React from 'react';
import AppContext from '../../context/app/context';
import { ThemeProvider } from 'styled-components';
import themes from './themes';

const Theme: React.FC = ({ children }) => {
  const {
    state: { theme },
  } = React.useContext(AppContext);

  const [currentTheme, setCurrentTheme] = React.useState<string>(theme);

  React.useEffect(() => {
    setCurrentTheme(theme);
  }, [theme]);

  return <ThemeProvider theme={themes[currentTheme]}>{children}</ThemeProvider>;
};

export default Theme;
