import { Dispatch } from 'react';

export type AppThemeType = 'dark' | 'light';

export interface AppState {
  theme: AppThemeType;
}

export interface AppAction {
  type: 'SET_THEME';
  payload: 'dark' | 'light';
}

export interface AppContextValue {
  state: AppState;
  dispatch: Dispatch<AppAction>;
}
