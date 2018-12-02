export type LinearGradientAttributes = {
  x1: number,
  y1: number,
  x2: number,
  y2: number,
};

export type RadialGradientAttributes = {
  cx: number,
  cy: number,
  r: number,
  fx?: number,
  fy?: number,
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
  id: string,
  type: 'linear' | 'radial',
  focalPoints: boolean,
  attributes: LinearGradientAttributes | RadialGradientAttributes,
  chroma: ChromaAttributes,
  input: number[],
  output: OutputColor[],
};
