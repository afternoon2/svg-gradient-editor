import * as React from 'react';
import styled from '../../../styles/styledComponents';

const ArtboardSVG = styled.svg`
  box-sizing: border-box;
  width: 100%;
  height: 100vh;
  fill: yellow;
`;

class Artboard extends React.Component {
  
  public render(): React.ReactNode {
    return (
      <ArtboardSVG />
    );
  }
}

export { Artboard };
