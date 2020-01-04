import React from 'react';
import { SvgBoard } from './Canvas.styled';
import SvgBackground from './background';
import SvgDrawing from './drawing';

const Canvas: React.FC = () => {
  return (
    <SvgBoard viewBox="0 0 1260 768">
      <SvgBackground />
      <SvgDrawing />
    </SvgBoard>
  );
};

export default Canvas;
