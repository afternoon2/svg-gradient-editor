import { InputColor, ColorMode } from "../_gradientTypes";

export type AttributePayload = {
  id: string,
  attribute: string,
  value: any,
};

export type TypePayload = {
  id: string,
  gradientType: 'linear' | 'radial',
  focalPoints?: boolean,
};

export type FocalPointsTogglePayload = {
  id: string,
  focalPoints: boolean,
};

export type ChromaJsTogglePayload = {
  id: string,
  useChroma: boolean,
};

export type AddColorPayload = {
  id: string,
  color: InputColor,
};

export type DeleteColorPayload = {
  gradientId: string,
  colorId: string,
};

export type InterpolationPayload = {
  id: string,
  interpolation: 'linear' | 'bezier',
};

export type ColorModePayload = {
  id: string,
  mode: ColorMode,
};
