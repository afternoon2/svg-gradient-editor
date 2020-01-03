import { AppContextValue, AppState } from './interfaces';
import { createContext } from 'react';

export const appInitialState: AppState = {
  theme: 'gray',
};

export default createContext<AppContextValue>({
  state: appInitialState,
  dispatch: () => null,
});
