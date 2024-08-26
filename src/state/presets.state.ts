import { atomWithStorage } from "jotai/utils";
import { Preset } from "./types";
import { atom } from "jotai";

export const presetsAtom = atomWithStorage<Preset[]>("preset", []);

export const selectedPresetAtom = atom<string | undefined>();
