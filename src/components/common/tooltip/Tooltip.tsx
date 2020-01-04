import React from 'react';
import nanoid from 'nanoid';
import { Direction } from './types';
import { StyledWrapper, StyledContent } from './Tooltip.styled';

interface Props {
  content: string;
  direction: Direction;
  distance?: number;
}

const Tooltip: React.FC<Props> = ({
  children, content, direction, distance = 0,
}) => {
  const id: string = nanoid();

  const [hidden, setHidden] = React.useState<boolean>(true);

  const onMouseEnter = React.useCallback(() => setHidden(false), []);
  const onMouseLeave = React.useCallback(() => setHidden(true), []);

  return (
    <StyledWrapper onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
      {children}
      <span aria-describedby={id} />
      {!hidden && (
        <StyledContent id={id} direction={direction} distance={distance}>
          {content}
        </StyledContent>
      )}
    </StyledWrapper>
  );
};

export default Tooltip;
