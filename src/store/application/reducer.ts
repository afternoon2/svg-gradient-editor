import { ActionType, getType } from 'typesafe-actions';
import * as appActions from './actions';
import { Preset } from '../_types';
import { loadPresets } from '../../utils/presets';

export type ApplicationReducer = {
  theme: 'dark' | 'light',
  presets: Preset[],
  selectedPreset: number | null,
  modal: boolean,
};

export type ApplicationAction = ActionType<typeof appActions>;

export const initialState: ApplicationReducer = {
  theme: 'dark',
  presets: loadPresets(),
  selectedPreset: null,
  modal: false,
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
          theme: action.payload as ('dark' | 'light'),
        };
      case getType(appActions.selectPreset):
        return {
          ...state,
          selectedPreset: action.payload,
        };
      case getType(appActions.openModal):
        return {
          ...state,
          modal: true,
        };
      case getType(appActions.closeModal):
        return {
          ...state,
          modal: false,
        };
      default:
        return state;
    }
  }
