import { AppColor, ChromaAttributes, GradientWorkerInput } from "@/state/types";
import { nanoid } from "nanoid";
import chroma from "chroma-js";

type ScaleFnCreator = (
  attrs: ChromaAttributes,
  colors: string[],
) => chroma.Scale<chroma.Color>;

export const linearScale: ScaleFnCreator = (attrs, colors) =>
  chroma
    .scale(colors)
    .mode(attrs.colorSpace)
    .correctLightness(attrs.lightnessCorrection);

export const bezierScale: ScaleFnCreator = (attrs, colors) =>
  chroma.bezier(colors).scale().correctLightness(attrs.lightnessCorrection);

const createBase = (
  samples: number,
  scale: chroma.Scale<chroma.Color>,
  alpha: number,
) =>
  new Array(samples).fill(null).map((_, i) => scale(i / samples).alpha(alpha));

export const getWorkerOutput = (input: GradientWorkerInput): AppColor[] => {
  const colorStrings = input.colors.map((c) => c.css);
  const scaleFnCreator =
    input.chromaAttributes.interpolation === "linear"
      ? linearScale
      : bezierScale;
  const scaleFn = scaleFnCreator(input.chromaAttributes, colorStrings);

  return createBase(
    input.chromaAttributes.samples,
    scaleFn,
    input.chromaAttributes.alpha,
  ).map((chromaColor, index, arr) => {
    return {
      id: nanoid(),
      value: chromaColor.rgba(),
      offset: (index / arr.length) * 100,
      css: chromaColor.css(),
    };
  });
};
