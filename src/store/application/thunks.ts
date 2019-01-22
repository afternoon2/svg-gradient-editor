import { Dispatch } from "redux";
import { ApplicationAction, ApplicationReducer } from "./reducer";
import * as appActions from './actions';
import { loadGradients } from '../editor/actions';
import { Preset } from "../_types";
import { EditorAction } from "../editor/reducer";

export const selectPreset = (payload: string) =>
  (
    dispatch: Dispatch<ApplicationAction | EditorAction>,
    getState: () => any,
  ) => {
    dispatch(appActions.selectPreset(payload));
    const list: Preset[] = getState().application.presets;
    const gradientsFromPreset = list
      .find((preset: Preset) => preset.name === payload);
    dispatch(loadGradients((gradientsFromPreset as Preset).value));
  };