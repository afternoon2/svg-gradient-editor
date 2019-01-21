import * as React from 'react';
import styled from '../../styles/styledComponents';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const SIWrapper = styled.a`
  position: absolute;
  bottom: .5em;
  right: calc(400px + .5em);
  z-index: 2;
  text-decoration: none;
  color: ${props => props.theme.colors.text};
  mix-blend-mode: difference;
  &:hover {
    cursor: pointer;
  }
`;

type SaveIconProps = {
  download: () => void,
};

export const SaveIcon = (props: SaveIconProps) => {
  return (
    <SIWrapper
      title="Get SVG markup"
      onClick={props.download}
    >
      <FontAwesomeIcon
        icon="code"
        size="2x"
      />
    </SIWrapper>
  );
};
