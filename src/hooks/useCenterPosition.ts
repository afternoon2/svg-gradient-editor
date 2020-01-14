import React from 'react';
import { Size } from 'types/vectors';

export type UseCenterPositionHook = [
  number,
  number,
];

const useCenterPosition = (
  innerSize: Size,
  outerSize: Size,
): UseCenterPositionHook => {
  const [x, setX] = React.useState<number>(0);
  const [y, setY] = React.useState<number>(0);

  React.useEffect(() => {
    const { width: outerWidth, height: outerHeight } = outerSize;
    const { width: innerWidth, height: innerHeight } = innerSize;

    setX((outerWidth - innerWidth) / 2);
    setY((outerHeight - innerHeight) / 2);
  }, [innerSize, outerSize]);

  return [
    x, y,
  ];
};

export default useCenterPosition;
