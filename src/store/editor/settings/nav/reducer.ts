import { ActionType, getType } from 'typesafe-actions';
import * as editorSettingsNavActions from './actions';

export type EditorSettingsView = 'list' | 'gradient';

export type EditorSettingsReducer = {
  view: EditorSettingsView,
};

export type EditorSettingsAction = ActionType<typeof editorSettingsNavActions>;

export const initialState: EditorSettingsReducer = {
  view: 'list',
};

export const nav =
  (
    state: EditorSettingsReducer = initialState,
    action: EditorSettingsAction,
  ) => {
    switch (action.type) {
      case getType(editorSettingsNavActions.setSettingsView):
        return {
          ...state,
          view: action.payload,
        }
      default:
        return state;
    }
  };
