import { ActionType, getType } from 'typesafe-actions';
import * as appActions from './actions';

export type ApplicationReducer = {
  theme: 'dark' | 'light',
};

export type ApplicationAction = ActionType<typeof appActions>;

export const initialState: ApplicationReducer = {
  theme: 'dark',
};

export const application =
  (
    state: ApplicationReducer = initialState,
    action: ApplicationAction
  ): ApplicationReducer => {
    switch (action.type) {
      case getType(appActions.setTheme):
        return {
          ...state,
          theme: action.payload,
        }
      default:
        return state;
    }
  }
