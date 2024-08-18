import { Preset } from "@/state/types";
import { nanoid } from "nanoid";

export const loadPresets = (): Preset[] =>
  Object.entries(localStorage)
    .filter(([key, _]) => key.includes("preset"))
    .map(([_, item]): Preset => JSON.parse(item));

export const savePreset = (preset: Preset) =>
  localStorage.setItem(nanoid(16), JSON.stringify(preset));

export const deletePreset = (id: string) => localStorage.removeItem(id);
