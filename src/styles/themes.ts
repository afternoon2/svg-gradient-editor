export type AppThemeColors = {
  primary: string;
  danger: string;
  main_100: string;
  main_200: string;
  main_300: string;
  main_400: string;
  text: string;
};

export type AppThemeBreakpoints = {
  sm: number,
  md: number,
  lg: number,
};

export type AppTheme = {
  colors: AppThemeColors,
  breakpoints: AppThemeBreakpoints,
};

const breakpoints: AppThemeBreakpoints = {
  sm: 768,
  md: 1440,
  lg: 1800,
};

export const darkTheme: AppTheme = {
  colors: {
    primary: '#5383D6',
    danger: '#CC0E3A',
    main_100: '#11151c',
    main_200: '#212C3F',
    main_300: '#364256',
    main_400: '#4D5E7C',
    text: '#FCFCFC',
  },
  breakpoints,
};

export const lightTheme: AppTheme = {
  colors: {
    primary: '#18e09d',
    danger: '#CC0E3A',
    main_100: '#898993',
    main_200: '#B6B6C1',
    main_300: '#CECEE0',
    main_400: '#DEDEEF',
    text: '#212121',
  },
  breakpoints,
};
