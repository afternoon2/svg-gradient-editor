import { ActionType, getType } from 'typesafe-actions';
import * as editorSettingsListActions from './actions';
import * as helpers from './helpers';
import * as payloads from './types';
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
        const newGradients: Gradient[] = [...state.gradients, action.payload as Gradient];
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
          gradients: helpers.updateTypeInGradient(action.payload as payloads.TypePayload, state.gradients),
        }
      case getType(editorSettingsListActions.updateAttribute):
        const newGradientList = helpers.updateAttributeInGradient(action.payload as payloads.AttributePayload, state.gradients);
        return {
          ...state,
          gradients: newGradientList,
        };
      case getType(editorSettingsListActions.toggleFocalPoints):
        return {
          ...state,
          gradients: helpers.toggleFocalPoints(action.payload as payloads.FocalPointsTogglePayload, state.gradients),
        };
      case getType(editorSettingsListActions.toggleChromaJs):
        return {
          ...state,
          gradients: helpers.toggleChromaJs(action.payload as payloads.ChromaJsTogglePayload, state.gradients),
        };
      case getType(editorSettingsListActions.addColor):
        return {
          ...state,
          gradients: helpers.addColorToGradient(action.payload as payloads.AddColorPayload, state.gradients),
        };
      case getType(editorSettingsListActions.editColor):
        return {
          ...state,
          gradients: helpers.editColorInGradient(action.payload as payloads.AddColorPayload, state.gradients),
        };
      case getType(editorSettingsListActions.deleteColor):
        return {
          ...state,
          gradients: helpers.deleteColorFromGradient(action.payload as payloads.DeleteColorPayload, state.gradients),
        };
      case getType(editorSettingsListActions.setGradientInterpolation):
        return {
          ...state,
          gradients: helpers.setGradientInterpolation(action.payload as payloads.InterpolationPayload, state.gradients),
        };
      case getType(editorSettingsListActions.setGradientColorMode):
        return {
          ...state,
          gradients: helpers.setGradientMode(action.payload as payloads.ColorModePayload, state.gradients),
        };
      case getType(editorSettingsListActions.setLightnessCorrection):
        return {
          ...state,
          gradients: helpers.setLightnessCorrection(action.payload as string, state.gradients),
        };
      case getType(editorSettingsListActions.setGradientSamples):
        return {
          ...state,
          gradients: helpers.setGradientSamples(action.payload as payloads.SamplesPayload, state.gradients),
        };
      case getType(editorSettingsListActions.deleteAllColors):
        return {
          ...state,
          gradients: helpers.deleteAllColorsFromGradient(action.payload as string, state.gradients),
        };
      case getType(editorSettingsListActions.computeChromaColors):
        return {
          ...state,
          gradients: helpers.computeChromaColors(action.payload as string, state.gradients),
        };
      default:
        return state;
    }
  };
