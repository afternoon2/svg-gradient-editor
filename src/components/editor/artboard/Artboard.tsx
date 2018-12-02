import * as React from 'react';
import styled from '../../../styles/styledComponents';

const ArtboardSVG = styled.svg`
  box-sizing: border-box;
  width: 100%;
  min-height: 100vh;
  fill: yellow;
`;

type ArtboardEvent = React.MouseEvent | React.TouchEvent;

type ArtboardState = {
  matrix: number[],
  drawing: boolean,
  startX: number | null,
  startY: number | null,
};

class Artboard extends React.Component {

  public state: ArtboardState = {
    matrix: [1, 0, 0, 1, 0, 0],
    drawing: false,
    startX: null,
    startY: null,
  };

  public pan = (dx: number, dy: number) => {
    const m = this.state.matrix;

    m[4] += dx;
    m[5] += dy;

    this.setState({ matrix: m });
  }

  private onDrawStart = (event: ArtboardEvent) => {
    // @ts-ignore
    const startX: number = typeof event.clientX === 'undefined' ?
    // @ts-ignore
      event.changedTouches[0].clientX : event.clientX;
    // @ts-ignore
    const startY: number = typeof event.clientY === 'undefined' ?
    // @ts-ignore
      event.changedTouches[0].clientY : event.clientY;
    
      const state = {
        drawing: true,
        startX,
        startY,
      }

      this.setState(state);
  }

  private onDrawMove = (event: ArtboardEvent) => {
    if (!this.state.drawing) {
      return;
    }

    // @ts-ignore
    const x: number = typeof event.clientX === 'undefined' ?
      // @ts-ignore
      event.changedTouches[0].clientX : event.clientX;
    // @ts-ignore
    const y: number = typeof event.clientY === 'undefined' ?
      // @ts-ignore
      event.changedTouches[0].clientY : event.clientY;

    // @ts-ignore
    const dx = x - this.state.startX;
    // @ts-ignore
    const dy = y - this.state.startY;

    this.pan(dx, dy);

    this.setState({
      startX: x,
      startY: y,
    });
  }

  private onDrawEnd = () => {
    this.setState({ drawing: false });
  }
  
  public render(): React.ReactNode {
    return (
      <ArtboardSVG
        onMouseDown={this.onDrawStart}
        onTouchStart={this.onDrawStart}
        onMouseMove={this.onDrawMove}
        onTouchMove={this.onDrawMove}
        onMouseUp={this.onDrawEnd}
        onTouchEnd={this.onDrawEnd}
      >
        <g transform={`matrix(${this.state.matrix.join(' ')})`}>

        </g>
      </ArtboardSVG>
    );
  }
}

export { Artboard };
