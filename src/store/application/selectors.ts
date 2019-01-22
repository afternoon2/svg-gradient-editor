import { Preset } from "../_types";

export const modal = (state: any): boolean =>
  state.application.modal;

export const presetList = (state: any): Preset[] =>
  state.application.presets;

export const selectedPreset = (state: any): string =>
  state.application.selectedPreset;