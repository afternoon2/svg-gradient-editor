import { AppColor, ChromaAttributes, GradientWorkerInput } from "@/state/types";
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

export const getWorkerOutput = (input: GradientWorkerInput): AppColor[] => {
  const colorStrings = input.colors.map((c) => `rgba(${c.value.join(",")})`);
  const scaleFnCreator =
    input.chromaAttributes.interpolation === "linear"
      ? linearScale
      : bezierScale;
  const scaleFn = scaleFnCreator(input.chromaAttributes, colorStrings);

  return createBase(input.chromaAttributes.samples, scaleFn).map(
    (chromaColor, index, arr) => {
      return {
        id: nanoid(),
        value: chromaColor.rgba(),
        offset: (index / arr.length) * 100,
      };
    }
  );
};
