import { ActionType, getType } from 'typesafe-actions';
import * as editorSettingsListActions from './actions';
import { Gradient } from '../_gradientTypes';
import {
  updateAttributeInGradient,
  updateTypeInGradient,
  toggleFocalPoints,
} from './helpers';

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
        };
      case getType(editorSettingsListActions.updateGradientType):
        return {
          ...state,
          gradients: updateTypeInGradient(action.payload, state.gradients),
        }
      case getType(editorSettingsListActions.updateAttribute):
        const newGradientList = updateAttributeInGradient(action.payload, state.gradients);
        return {
          ...state,
          gradients: newGradientList,
        };
      case getType(editorSettingsListActions.toggleFocalPoints):
        return {
          ...state,
          gradients: toggleFocalPoints(action.payload, state.gradients),
        }
      default:
        return state;
    }
  };
