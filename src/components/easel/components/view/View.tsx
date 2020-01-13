import React from 'react';
import SizingsContext from 'context/svg/sizings/context';
import ViewBoxContext from 'context/svg/viewbox/context';
import Head from '../head';

const View: React.FC = () => {
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
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      version="1.1"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width={width}
      height={height}
      viewBox={`${x} ${y} ${w} ${h}`}
      x="15%"
      y="15%"
    >
      <Head />
    </svg>
  );
};

export default View;
