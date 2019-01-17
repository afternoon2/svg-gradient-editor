export type ColorPayload = {
  gradientId: string,
  colorId: string
};

export type ColorEditionPayload = ColorPayload & {
  color: number[],
};