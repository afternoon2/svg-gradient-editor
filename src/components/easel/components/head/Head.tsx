import React from 'react';
import ViewBoxContext from 'context/svg/viewbox/context';

const Head: React.FC = () => {
  const {
    state: {
      x, y, width, height,
    },
  } = React.useContext(ViewBoxContext);
  return (
    <g>
      <rect x={x} y={y} width={width} height={height} fill="white" />
    </g>
  );
};

export default Head;
