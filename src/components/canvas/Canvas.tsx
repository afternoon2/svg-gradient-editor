import React, { useContext } from 'react';
import SizingsContext from 'context/svg/sizings/context';
import ViewBoxContext from 'context/svg/viewbox/context';
import SvgBackground from './background';
import SvgDrawing from './drawing';

const Canvas: React.FC = () => {
  const {
    state: {
      x, y, width, height,
    },
  } = useContext(SizingsContext);
  const { state: viewBox } = useContext(ViewBoxContext);

  return (
    <svg x={x} y={y} width={width} height={height} viewBox={`${Object.values(viewBox)}`}>
      <SvgBackground />
      <SvgDrawing />
    </svg>
  );
};

export default Canvas;
