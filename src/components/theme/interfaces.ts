export interface AppTheme {
  background: string;
  primary: string;
  secondary: string;
  tertiary: string;
  textPrimary: string;
  textSecondary: string;
}

export interface ThemesRepository {
  [key: string]: AppTheme;
  dark: AppTheme;
  light: AppTheme;
}
