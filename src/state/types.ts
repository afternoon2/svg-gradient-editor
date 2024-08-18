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
  name: string;
  value: Gradient[];
};

export type BlendMode =
  | "normal"
  | "multiply"
  | "screen"
  | "overlay"
  | "darken"
  | "lighten"
  | "color-dodge"
  | "color-burn"
  | "hard-light"
  | "soft-light"
  | "difference"
  | "exclusion"
  | "hue"
  | "saturation"
  | "color"
  | "luminosity";
