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

export type InputColor = {
  id: string,
  color: number[],
};

export type OutputColor = {
  color: string,
  offset: number,
};

export type Gradient = {
  id: string,
  name?: string;
  type: 'linear' | 'radial',
  focalPoints: boolean,
  useChroma: boolean,
  attributes: LinearGradientAttributes | RadialGradientAttributes,
  chroma: ChromaAttributes,
  colors: InputColor[],
  output: OutputColor[],
};
