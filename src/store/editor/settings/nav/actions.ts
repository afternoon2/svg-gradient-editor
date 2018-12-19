import { createAction } from 'typesafe-actions';
import { EditorSettingsView } from './reducer';

export const setSettingsView = createAction('@editor/settings/SET_SETTINGS_VIEW', (resolve) => {
  return (view: EditorSettingsView) => resolve(view);
});
