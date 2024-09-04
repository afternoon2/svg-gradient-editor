import { InterpolationMode } from "chroma-js";

export type LinearGradientAttributes = {
  x1: number;
  y1: number;
  x2: number;
  y2: number;
};

export type RadialGradientAttributes = {
  cx: number;
  cy: number;
  r: number;
  fx: number;
  fy: number;
  withFocalPoints?: boolean;
  spreadMethod?: "pad" | "repeat" | "reflect";
};

export type GradientInterpolationMode = "linear" | "bezier";

export type ChromaAttributes = {
  colorSpace: InterpolationMode;
  interpolation: GradientInterpolationMode;
  lightnessCorrection: boolean;
  samples: number;
};

export type InputColor = {
  id: string;
  color: [number, number, number, number] /* rgba */;
};

export type OutputColor = {
  id: string;
  color: number[];
  offset: number;
};

type CommonGradientProperties = {
  id: string;
  name?: string;
  blendMode: BlendModeObject;
  colorSpace: ColorSpace;
  chromaAttributes: ChromaAttributes;
  useChroma?: boolean;
  colors: InputColor[];
  output: OutputColor[];
};

export type LinearGradient = {
  type: "linear";
  attributes: LinearGradientAttributes;
} & CommonGradientProperties;

export type RadialGradient = {
  type: "radial";
  attributes: RadialGradientAttributes;
  focalPoints: boolean;
} & CommonGradientProperties;

export type Gradient = LinearGradient | RadialGradient;

export type BlendModeObject = {
  id: string;
  mode: BlendMode;
};

export type Preset = {
  id: string;
  name: string;
  value: Gradient[];
};

export const COLOR_SPACES = ["rgba", "hex", "hsva", "hsla"] as const;

export type ColorSpace = (typeof COLOR_SPACES)[number];

export const BLEND_MODES = [
  "normal",
  "color",
  "color-burn",
  "color-dodge",
  "darken",
  "difference",
  "exclusion",
  "hard-light",
  "hue",
  "lighten",
  "luminosity",
  "multiply",
  "overlay",
  "saturation",
  "screen",
  "soft-light",
] as const;

export type BlendMode = (typeof BLEND_MODES)[number];
