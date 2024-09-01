import { ChromaAttributes, Gradient, OutputColor } from "@/state/types";
import chroma from "chroma-js";
import { nanoid } from "nanoid";

type ScaleFnCreator = (
  attrs: ChromaAttributes,
  colors: string[]
) => chroma.Scale<chroma.Color>;

export const linearScale: ScaleFnCreator = (attrs, colors) =>
  chroma
    .scale(colors)
    .mode(attrs.colorSpace)
    .correctLightness(attrs.lightnessCorrection);

export const bezierScale: ScaleFnCreator = (attrs, colors) =>
  chroma.bezier(colors).scale().correctLightness(attrs.lightnessCorrection);

const createBase = (samples: number, scale: chroma.Scale<chroma.Color>) =>
  new Array(samples).fill(null).map((_, i) => scale(i / samples));

export const createChromaColor = (gradient: Gradient): OutputColor[] => {
  const colorStrings = gradient.colors.map((c) => `rgba(${c.color.join(",")})`);
  const scaleFnCreator =
    gradient.chromaAttributes.interpolation === "linear"
      ? linearScale
      : bezierScale;
  const scaleFn = scaleFnCreator(gradient.chromaAttributes, colorStrings);

  return createBase(gradient.chromaAttributes.samples, scaleFn).map(
    (chromaColor, index, arr) => {
      return {
        id: nanoid(),
        color: chromaColor.rgba(),
        offset: (index / arr.length) * 100,
      };
    }
  );
};
