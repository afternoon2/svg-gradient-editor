import { AppAction, AppState } from './interfaces';
import { appInitialState } from './context';

const appReducer = (state: AppState, { type, payload }: AppAction): AppState => {
  switch (type) {
    case 'SET_THEME':
      return {
        ...state,
        theme: payload,
      };
    default:
      return appInitialState;
  }
};

export default appReducer;
