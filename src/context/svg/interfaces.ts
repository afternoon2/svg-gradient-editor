export interface SvgProps {
  x: number;
  y: number;
  height: number;
  width: number;
}

export interface SvgAction<T> {
  type: T;
  payload: Partial<SvgProps>;
}
