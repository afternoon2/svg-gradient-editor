export interface AppColors {
  [key: string]: string;
  background: string;
  primary: string;
  secondary: string;
  tertiary: string;
  textPrimary: string;
  textSecondary: string;
}

export interface AppFontWeights {
  normal: number;
  bold: number;
}

export interface AppTheme {
  colors: AppColors;
  font: string;
  weight: AppFontWeights;
}

export interface ThemesRepository {
  [key: string]: AppTheme;
  dark: AppTheme;
  gray: AppTheme;
}
