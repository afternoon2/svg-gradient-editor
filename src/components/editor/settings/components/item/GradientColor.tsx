import * as React from 'react';
import { SketchPicker, ColorResult } from 'react-color';
import styled from '../../../../../styles/styledComponents';
import { modularSize } from '../../../../../styles/typography';
import { InputColor } from '../../../../../store/editor/_gradientTypes';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

type ColorSampleProps = {
  background: string,
};

const ColorSample = styled.div<ColorSampleProps>`
  width: 40px;
  height: 40px;
  background-color: ${props => props.background};
  border-radius: 4px;
`;

const FColorWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 40px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: ${props => props.theme.colors.text};
  border-radius: 4px;
  padding: .5em;
`;

const FColorName = styled.span`
  width: 50%;
  font-size: ${modularSize(-1.65)};
  box-sizing: border-box;
  margin-left: .5em;
  padding-right: 1em;
`;

const FColorManager = styled.div`
  width: 30%;
  display: flex;
  box-sizing: border-box;
`;

const FColorLink = styled.a`
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

const FColorPickerWrapper = styled.div`
  position: absolute;
  z-index: 10;
  right: 3em;
  top: 3em;
  .sketch-picker input {
    color: #212121 !important;
  }
`;

export type GradientColorProps = {
  color: InputColor,
  onDelete: () => void,
  onEdit: (color: InputColor) => void,
};

export const GradientColor = (props: GradientColorProps) => {
  const { color, onDelete, onEdit } = props;
  const [ picker, togglePicker ] = React.useState(false);

  let pickerParent: React.MutableRefObject<null | HTMLDivElement> = React.useRef(null);

  const outsideClickHandler = () => {
    const clickHandler = (event: MouseEvent) => {
      if (
        pickerParent.current !== null &&
        !(pickerParent.current as HTMLDivElement).contains(event.target as HTMLDivElement)
      ) {
        togglePicker(false);
        document.removeEventListener('click', clickHandler, false);
      }
    };

    if (pickerParent && picker) {
      document.addEventListener('click', clickHandler, false);
    }
  };

  React.useEffect(outsideClickHandler, [picker]);

  return (
    <FColorWrapper>
      <ColorSample background={`rgba(${[...color.color]})`}/>
      <FColorName>
        <strong>R</strong> {color.color[0]},&nbsp;
        <strong>G</strong> {color.color[1]},&nbsp;
        <strong>B</strong> {color.color[2]},&nbsp;
        <strong>A</strong> {color.color[3] || 1}
      </FColorName>
      <FColorManager>
        <FColorLink
          title="Edit color"
          onClick={() => togglePicker(!picker)}
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
      {
        picker ?
          <FColorPickerWrapper ref={pickerParent}>
            <SketchPicker
              color={{
                r: color.color[0],
                g: color.color[1],
                b: color.color[2],
                a: color.color[3] || 1,
              }}
              onChange={(newColor: ColorResult) => onEdit({
                id: color.id,
                color: [
                  newColor.rgb.r,
                  newColor.rgb.g,
                  newColor.rgb.b,
                  newColor.rgb.a as number
                ],
              })}
            />
          </FColorPickerWrapper> :
          null
      }
    </FColorWrapper>
  );
};