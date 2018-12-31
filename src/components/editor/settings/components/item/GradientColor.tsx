import * as React from 'react';
import { SketchPicker } from 'react-color';
import styled from '../../../../../styles/styledComponents';
import { modularSize } from '../../../../../styles/typography';
import { InputColor } from '../../../../../store/editor/_gradientTypes';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

type FColorWrapperProps = {
  backgroundColor: string,
};

const FColorWrapper = styled.div<FColorWrapperProps>`
  position: relative;
  width: 100%;
  height: 40px;
  box-sizing: border-box;
  display: flex;
  background-color: ${props => props.backgroundColor};
  display: flex;
  align-items: center;
  justify-content: space-around;
  color: ${props => props.theme.colors.danger};
  border-radius: 4px;
  span, a {
    font-size: ${modularSize(-1)};
    mix-blend-mode: hard-light;
  }
  a {
    box-sizing: border-box;
    text-decoration: none;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 20%;
    height: inherit;
    color: ${props => props.theme.colors.danger};
  }
  span {
    user-select: none;
  }
  a:hover {
    cursor: pointer;
  }
`;

const PickerWrapper = styled.div`
  position: absolute;
  z-index: 9;
  transition: 120ms all ease-in-out;
`;

export type GradientColorProps = {
  color: InputColor,
  onDelete: (id: string) => void,
};

export const GradientColor = (props: GradientColorProps) => {
  const { color, onDelete } = props;
  const [ picker, togglePicker ] = React.useState(false);
  const renderPicker = () => {
    if (picker) {
      return (
        <PickerWrapper>
          <SketchPicker
            color={{
              r: color.color[0],
              g: color.color[1],
              b: color.color[2],
              a: color.color[3] || 1,
            }}
            onChangeComplete={() => {}}
          />
        </PickerWrapper>
      );
    }
  }
  return (
    <FColorWrapper
      backgroundColor={`rgba(${[...color.color]})`}
    >
      <span>
        rgba(
        {color.color[0]},&nbsp;
        {color.color[1]},&nbsp;
        {color.color[2]}
      )
      </span>
      <a onClick={() => onDelete(color.id)}>
        <FontAwesomeIcon
          icon="trash"
          size="sm"
        />
      </a>
    </FColorWrapper>
  );
};