import { ActionType, getType } from 'typesafe-actions';
import * as editorSettingsListActions from './actions';
import { Gradient } from '../_gradientTypes';

export type EditorSettingsListReducer = {
  gradients: Gradient[],
  current: number;
};

export type EditorSettingsListAction = ActionType<typeof editorSettingsListActions>;

export const initialState: EditorSettingsListReducer = {
  gradients: [],
  current: -1,
};

export const settings =
  (
    state: EditorSettingsListReducer = initialState,
    action: EditorSettingsListAction,
  ) => {
    switch (action.type) {
      case getType(editorSettingsListActions.addGradient):
        const newGradients: Gradient[] = [...state.gradients, action.payload];
        return {
          ...state,
          gradients: newGradients,
          current: newGradients.length - 1,
        }
      default:
        return state;
    }
  };
