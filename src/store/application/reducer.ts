import { ActionType, getType } from 'typesafe-actions';
import * as appActions from './actions';
import { AppModal } from './_types';

export type ApplicationReducer = {
  theme: 'dark' | 'light',
  modal: AppModal | null,
};

export type ApplicationAction = ActionType<typeof appActions>;

export const initialState: ApplicationReducer = {
  theme: 'dark',
  modal: null,
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
        };
      case getType(appActions.setModal):
        return {
          ...state,
          modal: action.payload,
        };
      case getType(appActions.clearModal):
        return {
          ...state,
          modal: null,
        };
      default:
        return state;
    }
  }
