import * as React from 'react';
import { SketchPicker } from 'react-color';
import styled from '../../../../../styles/styledComponents';
import { modularSize } from '../../../../../styles/typography';
import { InputColor } from '../../../../../store/editor/_gradientTypes';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const BLEND_MODE = 'hard-light';

type ColorWrapperProps = {
  background: string,
};

const FColorWrapper = styled.div<ColorWrapperProps>`
  position: relative;
  width: 100%;
  height: 40px;
  box-sizing: border-box;
  display: flex;
  display: flex;
  align-items: center;
  background-color: ${props => props.background};
  color: ${props => props.theme.colors.text};
  border-radius: 4px;
  padding: .5em;
`;

const FColorName = styled.span`
  width: 70%;
  font-size: ${modularSize(-1.65)};
  mix-blend-mode: ${BLEND_MODE};
`;

const FColorManager = styled.div`
  width: 30%;
  display: flex;
`;

const FColorLink = styled.a`
  mix-blend-mode: ${BLEND_MODE};
  font-size: ${modularSize(-1.65)};
  box-sizing: border-box;
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50%;
  height: inherit;
  &:hover {
    cursor: pointer;
  }
`;

export type GradientColorProps = {
  color: InputColor,
  onDelete: () => void,
};

export const GradientColor = (props: GradientColorProps) => {
  const { color, onDelete } = props;
  return (
    <FColorWrapper
      background={`rgba(${[...color.color]})`}
    >
      <FColorName>
        rgba(
        {color.color[0]},&nbsp;
        {color.color[1]},&nbsp;
        {color.color[2]},&nbsp;
        {color.color[3] || 1}
      )
      </FColorName>
      <FColorManager>
        <FColorLink
          title="Edit color"
        >
          <FontAwesomeIcon icon="edit" />
        </FColorLink>
        <FColorLink
          onClick={() => onDelete()}
          title="Delete color"
        >
          <FontAwesomeIcon icon="trash"/>
        </FColorLink>
      </FColorManager>
    </FColorWrapper>
  );
};