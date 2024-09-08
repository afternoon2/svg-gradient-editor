import { InterpolationMode } from "chroma-js";

export type SpreadMethod = "pad" | "repeat" | "reflect";

export type LinearGradientAttributes = {
  x1: number;
  y1: number;
  x2: number;
  y2: number;
  spreadMethod: SpreadMethod;
};

export type RadialGradientAttributes = {
  cx: number;
  cy: number;
  r: number;
  fx: number;
  fy: number;
  withFocalPoints?: boolean;
  spreadMethod: SpreadMethod;
};

export type GradientInterpolationMode = "linear" | "bezier";

export type ChromaAttributes = {
  colorSpace: InterpolationMode;
  interpolation: GradientInterpolationMode;
  lightnessCorrection: boolean;
  samples: number;
};

export type GradientType = "linear" | "radial";

export type AppColor = {
  id: string;
  value: [number, number, number, number];
  css: string;
  offset?: number;
};

export type BlendModeObject = {
  id: string;
  mode: BlendMode;
};

export type Preset = {
  id: string;
  name: string;
  value: {
    globalBlendMode: BlendMode;
    gradients: Gradient[];
  };
};

export const COLOR_SPACES = ["rgba", "hex", "hsva", "hsla"] as const;
export const INTERPOLATION_MODES = [
  "rgb",
  "hsl",
  "hsv",
  "hsi",
  "lab",
  "oklab",
  "lch",
  "oklch",
  "hcl",
  "lrgb",
] as const;

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

export type GradientWorkerInput = {
  id: string;
  colors: AppColor[];
  chromaAttributes: ChromaAttributes;
};

export type GradientWorkerOutput = Pick<GradientWorkerInput, "id" | "colors">;

export type Gradient = {
  id: string;
  alias: string | null;
  useChroma: boolean;
  chromaAttributes: ChromaAttributes;
  input: AppColor[];
  output: AppColor[];
  blendMode: BlendMode;
  type: GradientType;
  linearAttributes: LinearGradientAttributes;
  radialAttributes: RadialGradientAttributes;
};
