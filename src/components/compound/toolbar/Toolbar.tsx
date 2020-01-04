import React from 'react';
import { SizeProp } from '@fortawesome/fontawesome-svg-core';
import { StyledHeader } from './Toolbar.styled';
import Tools from './tools';
import Social from './social';

const Toolbar: React.FC = () => {
  const RADIO_SIZE: SizeProp = 'lg';

  return (
    <StyledHeader>
      <Tools iconSize={RADIO_SIZE} />
      <Social iconSize={RADIO_SIZE} />
    </StyledHeader>
  );
};

export default Toolbar;
