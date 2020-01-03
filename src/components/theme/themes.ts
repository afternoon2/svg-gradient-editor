import { ThemesRepository, AppFontWeights } from './interfaces';

const weight: AppFontWeights = {
  normal: 400,
  bold: 500,
};

const font = 'Rubik';

const themes: ThemesRepository = {
  dark: {
    colors: {
      background: '#0f0e17',
      primary: '#ff8906',
      secondary: '#f25f4c',
      tertiary: '#e53170',
      textPrimary: '#fffffe',
      textSecondary: '#a7a9be',
    },
    font,
    weight,
  },
  gray: {
    colors: {
      background: '#16161a',
      primary: '#7f5af0',
      secondary: '#72757e',
      tertiary: '#2cb67d',
      textPrimary: '#fffffe',
      textSecondary: '#94a1b2',
    },
    font,
    weight,
  }
};

export default themes;
