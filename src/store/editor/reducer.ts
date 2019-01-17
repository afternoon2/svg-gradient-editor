import { Gradient } from '../_types';
import { getType, ActionType } from 'typesafe-actions';
import * as EditorActions from './actions';
import * as mutations from './mutations';

export type EditorReducer = {
  gradients: Gradient[],
  error: string | null,
};

export type EditorAction = ActionType<typeof EditorActions>;

const initialState: EditorReducer = {
  gradients: [],
  error: null,
};

export const editor = (
  state: EditorReducer = initialState,
  action: EditorAction
): EditorReducer => {
  switch (action.type) {
    case getType(EditorActions.addGradient):
      return mutations.addGradient(state, action.payload);
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
    default:
      return state;
  }
};
