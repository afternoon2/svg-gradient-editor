import { Dispatch } from "redux";
import { ApplicationAction } from "./reducer";
import * as appActions from './actions';
import { addPredefinedGradient, deleteAllGradients } from '../editor/actions';
import { Preset, Gradient } from "../_types";
import { EditorAction } from "../editor/reducer";

export const selectPreset = (payload: string) =>
  (
    dispatch: Dispatch<ApplicationAction | EditorAction>,
    getState: () => any,
  ) => {
    const list: Preset[] = getState().application.presets;
    const gradientsLength = getState().editor.gradients.length;
    const gradientsFromPreset = list
      .find((preset: Preset) => preset.name === payload);
    if (gradientsLength > 0) {
      dispatch(deleteAllGradients());
    }
    dispatch(appActions.selectPreset(payload));
    (gradientsFromPreset as Preset).value.forEach((gradient: Gradient) =>
      dispatch(addPredefinedGradient(gradient))
    );
  };