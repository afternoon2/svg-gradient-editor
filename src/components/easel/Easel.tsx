import React from 'react';
import StyledEasel, { EaselProps } from './Easel.styled';
import Artboard from './components/artboard';

const Easel: React.FC<EaselProps> = ({ background, width, height }) => (
  <StyledEasel width={width} height={height} background={background}>
    <Artboard />
  </StyledEasel>
);

export default Easel;
