import { atomWithStorage } from "jotai/utils";
import { Preset } from "./types";

export const presetsAtom = atomWithStorage<Preset[]>("preset", []);

export const selectedPresetAtom = atomWithStorage<string | undefined>(
  "selectedPreset",
  undefined
);
