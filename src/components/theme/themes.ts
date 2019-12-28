import { ThemesRepository } from './interfaces';

const themes: ThemesRepository = {
  dark: {
    background: '#0f0e17',
    primary: '#ff8906',
    secondary: '#f25f4c',
    tertiary: '#e53170',
    textPrimary: '#fffffe',
    textSecondary: '#a7a9be',
  },
  light: {
    background: '#fffffe',
    primary: '#6246ea',
    secondary: '#d1d1e9',
    tertiary: '#e45858',
    textPrimary: '#2b2c34',
    textSecondary: '#2b2c34',
  },
};

export default themes;
