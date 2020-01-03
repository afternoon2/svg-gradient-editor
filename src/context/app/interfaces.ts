import { Dispatch } from 'react';

export type AppThemeType = string;

export interface AppState {
  theme: AppThemeType;
}

export interface AppAction {
  type: 'SET_THEME';
  payload: string;
}

export interface AppContextValue {
  state: AppState;
  dispatch: Dispatch<AppAction>;
}
