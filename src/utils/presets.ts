import nanoid from 'nanoid';
import { Gradient, Preset } from '../store/_types';

export const loadPresets = (): Preset[] => {
  const itemsInStorage: string[] = Object.values(localStorage);
  if (itemsInStorage.length > 0) {
    return itemsInStorage
      .map((item: string): Preset => JSON.parse(item));
  }
  return [];
};

export const savePreset = (preset: Preset) =>
  localStorage.setItem(nanoid(), JSON.stringify(preset));
