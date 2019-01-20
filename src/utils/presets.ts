import { Preset } from '../store/_types';

export const loadPresets = () => {
  let presets: Preset[][] | null = null;
  const currentValues: string[] = Object.values(localStorage);
  if (currentValues.length > 0) {
    try {
      presets = currentValues.map((value: string): Preset[] => JSON.parse(value));
    } catch (err) {}
  }
  return presets;
};

export const savePreset = (preset: Preset) =>
  localStorage.setItem(preset.id, JSON.stringify(preset));

export const saveAllPresets = (presets: Preset[]) =>
  presets.map((preset: Preset) => savePreset(preset));
