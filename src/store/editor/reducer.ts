import { Gradient, BlendMode } from '../_types';
import { getType, ActionType } from 'typesafe-actions';
import * as EditorActions from './actions';
import * as mutations from './mutations';

export type EditorReducer = {
  gradients: Gradient[],
  blendMode: BlendMode,
};

export type EditorAction = ActionType<typeof EditorActions>;

const initialState: EditorReducer = {
  gradients: [],
  blendMode: 'normal',
};

export const editor = (
  state: EditorReducer = initialState,
  action: EditorAction
): EditorReducer => {
  switch (action.type) {
    case getType(EditorActions.addGradient):
      return mutations.addGradient(state, action.payload);
    case getType(EditorActions.addPredefinedGradient):
      return mutations.addPredefinedGradient(state, action.payload);
    case getType(EditorActions.deleteGradient):
      return mutations.deleteGradient(state, action.payload);
    case getType(EditorActions.addColor):
      return mutations.addColor(state, action.payload);
    case getType(EditorActions.deleteColor):
      return mutations.deleteColor(state, action.payload);
    case getType(EditorActions.editColor):
      return mutations.editColor(state, action.payload);
    case getType(EditorActions.deleteAllColors):
      return mutations.deleteAllColors(state, action.payload);
    case getType(EditorActions.toggleChroma):
      return mutations.toggleChroma(state, action.payload);
    case getType(EditorActions.setGradientType):
      return mutations.setGradientType(state, action.payload);
    case getType(EditorActions.setAttribute):
      return mutations.setAttribute(state, action.payload);
    case getType(EditorActions.toggleFocalPoints):
      return mutations.toggleFocalPoints(state, action.payload);
    case getType(EditorActions.replaceGradientAttributes):
      return mutations.replaceGradientAttributes(state, action.payload);
    case getType(EditorActions.setChromaAttribute):
      return mutations.setChromaAttribute(state, action.payload);
    case getType(EditorActions.computeChromaColors):
      return mutations.computeChromaColors(state, action.payload);
    case getType(EditorActions.deleteAllGradients):
      return mutations.deleteAllGradients(state);
    case getType(EditorActions.setBlendMode):
      return mutations.setBlendMode(state, action.payload);
    default:
      return state;
  }
};
