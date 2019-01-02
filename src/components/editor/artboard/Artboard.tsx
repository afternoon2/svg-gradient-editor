import * as React from 'react';
import styled from '../../../styles/styledComponents';
import { DefsRenderer } from './DefsRenderer';
import { FiguresRenderer } from './FiguresRenderer';

const ArtboardSVG = styled.svg`
  box-sizing: border-box;
  width: 100%;
  min-height: calc(100vh - 5px);
`;

class Artboard extends React.Component {

  private renderDefinitions = () => {};

  private renderGradients = () => {};

  public render(): React.ReactNode {
    return (
      <ArtboardSVG>
        <DefsRenderer />
        <FiguresRenderer />
      </ArtboardSVG>
    );
  }
}

export { Artboard };
