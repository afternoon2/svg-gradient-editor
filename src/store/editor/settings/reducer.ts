import { ActionType, getType } from 'typesafe-actions';
import * as editorSettingsListActions from './actions';
import { Gradient } from '../_gradientTypes';

export type EditorSettingsListReducer = {
  gradients: Gradient[],
};

export type EditorSettingsListAction = ActionType<typeof editorSettingsListActions>;

export const initialState: EditorSettingsListReducer = {
  gradients: [],
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
        }
      case getType(editorSettingsListActions.deleteGradient):
        return {
          ...state,
          gradients: state.gradients.filter(
            (gradient: Gradient) => gradient.id !== action.payload,
          ),
        }
      default:
        return state;
    }
  };
