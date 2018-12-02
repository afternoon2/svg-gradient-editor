import { Gradient } from './_gradientTypes';

export type RectAttributes = {
  x: number,
  y: number,
  width: number,
  height: number,
  fill: string,
  stroke: string,
  strokeWidth?: number,
};

export type CircleAttributes = {
  cx: number;
  cy: number;
  r: number;
  fill: string;
  stroke: string;
  strokeWidth?: number;
};

export type ControlPosition = 'top-left'
  | 'top'
  | 'top-right'
  | 'right'
  | 'bottom-right'
  | 'bottom'
  | 'bottom-left'
  | 'left';

export type ControlPoint = {
  id: string;
  active: boolean;
  position: ControlPosition;
  cx: number;
  cy: number;
  r: number;
};

export type Figure = {
  id: string,
  shape: 'rect' | 'circle',
  selected: boolean,
  attributes: RectAttributes | CircleAttributes,
  gradients: Gradient[],
  controls: ControlPoint[],
};