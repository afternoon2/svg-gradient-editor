import React from 'react';
import SizingsContext from 'context/svg/sizings/context';
import ViewBoxContext from 'context/svg/viewbox/context';
import useCenterPosition from 'hooks/useCenterPosition';
import Head from '../head';

interface Props {
  artboardWidth: number;
  artboardHeight: number;
}

const View: React.FC<Props> = ({ artboardHeight, artboardWidth }) => {
  const {
    state: {
      width, height,
    },
  } = React.useContext(SizingsContext);
  const {
    state: {
      x, y, width: w, height: h,
    },
  } = React.useContext(ViewBoxContext);

  const [posX, posY] = useCenterPosition(
    { width, height },
    { width: artboardWidth, height: artboardHeight },
  );
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      version="1.1"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width={width}
      height={height}
      viewBox={`${x} ${y} ${w} ${h}`}
      x={posX}
      y={posY}
    >
      <Head />
    </svg>
  );
};

export default View;
