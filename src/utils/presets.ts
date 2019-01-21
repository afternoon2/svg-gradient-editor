import nanoid from 'nanoid';
import { Gradient } from '../store/_types';

export const loadPresets = () => {
  let presets: Gradient[][] | null = null;
  const currentValues: string[] = Object.values(localStorage);
  if (currentValues.length > 0) {
    try {
      presets = currentValues.map((value: string): Gradient[] => JSON.parse(value));
    } catch (err) {}
  }
  return presets;
};

export const savePreset = (preset: Gradient[]) =>
  localStorage.setItem(nanoid(), JSON.stringify(preset));
