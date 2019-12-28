import { Dispatch } from 'react';

export interface AppState {
  theme: 'dark' | 'light';
}

export interface AppAction {
  type: 'SET_THEME';
  payload: 'dark' | 'light';
}

export interface AppContextValue {
  state: AppState;
  dispatch: Dispatch<AppAction>;
}
