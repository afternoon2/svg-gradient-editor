import { atomWithStorage } from "jotai/utils";
import { Preset } from "./types";

export const presetsAtom = atomWithStorage<Preset[]>("presets", []);

export const selectedPresetIdAtom = atomWithStorage<string | undefined>(
  "selectedPreset",
  undefined
);
