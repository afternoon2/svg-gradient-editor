import { Dispatch } from 'react';

export type FigureShape = 'rect' | 'circle' | 'ellipse' | 'polygon';

export interface FigureRectAttributes {
  x: number;
  y: number;
  width: number;
  height: number;
  rx: number;
  ry: number;
}

export interface FigureCircleAttributes {
  cx: number;
  cy: number;
  r: number;
}

export interface FigureEllipseAttributes {
  cx: number;
  cy: number;
  rx: number;
  ry: number;
}

export interface Figure {
  attributes: FigureRectAttributes | FigureCircleAttributes | FigureEllipseAttributes;
  filter?: string;
  gradients: string[];
  id: string;
  shape: FigureShape;
}

export interface FigureRegistry {
  [key: string]: Figure;
}

export interface FigureBarState {
  shape: FigureShape;
  figures: FigureRegistry;
}

export interface FigureBarAction {
  type: 'SET_SHAPE' | 'SET_FIGURES';
  payload: FigureShape | FigureRegistry;
}

export interface FigureBarContextValue {
  state: FigureBarState;
  dispatch: Dispatch<FigureBarAction>;
}
