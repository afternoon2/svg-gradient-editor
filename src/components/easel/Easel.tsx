import React from 'react';
import { StyledContainer, StyledCanvasContainer } from './Easel.styled';
import Canvas from 'components/canvas';

const Easel: React.FC = () => {
  return (
    <StyledContainer>
      <StyledCanvasContainer>
        <Canvas />
      </StyledCanvasContainer>
    </StyledContainer>
  );
};

export default Easel;
