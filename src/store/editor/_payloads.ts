export type ColorPayload = {
  gradientId: string,
  colorId: string
};

export type ColorEditionPayload = ColorPayload & {
  color: number[],
};

export type GradientTypePayload = {
  id: string,
  type: 'linear' | 'radial',
};

export type AttributeEditionPayload = {
  id: string,
  attribute: string,
  value: number,
};