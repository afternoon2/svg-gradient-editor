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
