import React from 'react';
import { SvgBoard } from './Canvas.styled';
import SvgBackground from './background';
import SvgDrawing from './drawing';

const Canvas: React.FC = () => {
  return (
    <SvgBoard>
      <SvgBackground />
      <SvgDrawing />
    </SvgBoard>
  );
};

export default Canvas;
