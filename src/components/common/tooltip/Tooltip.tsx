import React from 'react';
import nanoid from 'nanoid';
import { Direction } from './types';
import { StyledWrapper, StyledContent } from './Tooltip.styled';

interface Props {
  content: string;
  direction: Direction;
  distance?: number;
}

const Tooltip: React.FC<Props> = ({ children, content, direction, distance = 0 }) => {
  const id: string = nanoid();

  const [hidden, setHidden] = React.useState<boolean>(true);

  const onMouseEnter = React.useCallback(() => setHidden(false), []);
  const onMouseLeave = React.useCallback(() => setHidden(true), []);

  return (
    <StyledWrapper data-tooltip onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
      {children}
      <span data-tooltip-trigger aria-describedby={id}></span>
      {!hidden && (
        <StyledContent id={id} direction={direction} distance={distance}>
          {content}
        </StyledContent>
      )}
    </StyledWrapper>
  );
};

export default Tooltip;
