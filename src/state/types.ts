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
  color: number[];
};

export type OutputColor = {
  color: number[];
  offset: number;
};

type CommonGradientProperties = {
  id: string;
  blendMode: BlendModeObject;
  chroma?: ChromaAttributes;
  colors: InputColor[];
  output: OutputColor[];
};

export type Gradient = (
  | { type: "linear"; attributes: LinearGradientAttributes }
  | {
      type: "radial";
      attributes: RadialGradientAttributes;
      focalPoints: boolean;
    }
) &
  CommonGradientProperties;

export type BlendModeObject = {
  id: string;
  mode: BlendMode;
};

export type Preset = {
  id: string;
  name: string;
  value: Gradient[];
};

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
