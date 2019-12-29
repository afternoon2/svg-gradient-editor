import { FigureShape } from './types';
import { Dispatch } from 'react';

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
  readonly id: string;
  shape: FigureShape;
}

export interface FiguresState {
  [key: string]: Figure;
}

export interface FigureMovePayload {
  id: string;
  newIndex: number;
  oldIndex: number;
};

export interface FiguresAction {
  type: 'ADD_FIGURE' | 'REMOVE_FIGURE' | 'MOVE_FIGURE';
  payload: string | Figure | FigureMovePayload;
}

export interface FiguresContextValue {
  state: FiguresState;
  dispatch: Dispatch<FiguresAction>;
}
