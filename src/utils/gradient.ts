import chroma from 'chroma-js';
import {
  Gradient,
  OutputColor,
  InputColor,
  ChromaAttributes
} from '../store/editor/_gradientTypes';

const createLinearScale = (attrs: ChromaAttributes, colors: string[]) => {
  if (attrs.lightnessCorrection) {
    return chroma
      .scale(colors)
      .mode(attrs.mode)
      .correctLightness();
  } else {
    return chroma
      .scale(colors)
      .mode(attrs.mode);
  }
};

const createBezierScale = (attrs: ChromaAttributes, colors: string[]) => {
  if (attrs.lightnessCorrection) {
    return chroma
      .bezier(colors)
      .scale()
      .correctLightness();
  } else {
    return chroma.bezier(colors);
  }
};

const createBase = (samples: number, scale: any): chroma.Color[] => {
  const base: chroma.Color[] = [];
  for (let i = 0; i < samples; i++) {
    base.push(scale(i / samples));
  }
  return base;
};

const normalize = (base: any) => {
  return base.map((color: any) => color._rgb)
    .map((val: any) => val.filter(
      (el: any) => typeof el !== 'boolean'
    ))
    }

export const gradient = (gradient: Gradient): OutputColor[] => {
  const _colors: string[] = gradient.colors
    .map((color: InputColor): string => {
      const c = color.color;
      return `rgba(${c[0]}, ${c[1]}, ${c[2]}, ${c[3]})`;
    });
  const scaleCreator = gradient.chroma.interpolation === 'linear' ?
    createLinearScale : createBezierScale;
  const scale = scaleCreator(gradient.chroma, _colors);
  const base: chroma.Color[] = createBase(gradient.chroma.samples, scale);
  const rawResult = normalize(base);
  return rawResult.map((color: any): OutputColor => ({
    color: [color.r, color.g, color.b, color.a],
    offset: rawResult.indexOf(color) / (100 * rawResult.length),
  }));
};
