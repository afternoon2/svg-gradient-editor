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
    primary: '#EAF9FF',
    danger: '#CC0E3A',
    main_100: '#A4BCAD',
    main_200: '#CEE5D7',
    main_300: '#DCEAE2',
    main_400: '#EBF4EE',
    text: '#212121',
  },
  breakpoints,
};
