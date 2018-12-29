export type LinearGradientAttributes = {
  x1: number | null,
  y1: number | null,
  x2: number | null,
  y2: number | null,
};

export type RadialGradientAttributes = {
  cx: number | null,
  cy: number | null,
  r: number | null,
  fx?: number | null,
  fy?: number | null,
  spreadMethod?: 'pad' | 'repeat' | 'reflect',
};

export type ChromaAttributes = {
  isInput: boolean,
  interpolation: 'linear' | 'bezier',
  mode:
    'lch'
    | 'hsv'
    | 'lab'
    | 'rgb'
    | 'hsl'
    | 'hsi'
    | 'hcl',
  lightnessCorrection: boolean,
  samples: number,
};

export type OutputColor = {
  color: string,
  offset: number,
};

export type Gradient = {
  isEmpty: boolean,
  id: string,
  name?: string;
  type: 'linear' | 'radial',
  focalPoints: boolean,
  attributes: LinearGradientAttributes | RadialGradientAttributes,
  chroma: ChromaAttributes,
  colors: number[],
  output: OutputColor[],
};
