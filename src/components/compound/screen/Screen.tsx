import React from 'react';
import Rulers from 'components/rulers';
import Easel from 'components/easel';
import { StyledContainer } from './Screen.styled';

const Screen: React.FC = () => {
  return (
    <StyledContainer>
      <Rulers>
        <Easel />
      </Rulers>
    </StyledContainer>
  );
};

export default Screen;
