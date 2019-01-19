import * as React from 'react';
import styled from '../../../styles/styledComponents';
import { DefsRenderer } from './DefsRenderer';
import { FiguresRenderer } from './FiguresRenderer';
import { SaveIcon } from '../../common/SaveIcon';

const ArtboardSVG = styled.svg`
  box-sizing: border-box;
  width: 100%;
  min-height: calc(100vh - 5px);
`;

const Artboard = () => {
  
  const svg = React.useRef(null);
  const download = () => {
    if (svg) {
      // @ts-ignore
      const content: string = svg.current.outerHTML;
      document.execCommand('Copy');
      alert(content);
    }
  };

  return (
    <React.Fragment>
      <ArtboardSVG ref={svg}>
        <DefsRenderer />
        <FiguresRenderer />
      </ArtboardSVG>
      <SaveIcon download={download} />
    </React.Fragment>
  );
}

export { Artboard };
