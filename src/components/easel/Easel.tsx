import React from 'react';
import { StyledContainer } from './Easel.styled';
import Canvas from 'components/canvas';

const Easel: React.FC = () => {
  return (
    <StyledContainer>
      <Canvas />
    </StyledContainer>
  );
};

export default Easel;
