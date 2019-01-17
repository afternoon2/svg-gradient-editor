import * as React from 'react';
import { connect } from 'react-redux';
import { SketchPicker, ColorResult } from 'react-color';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  CSample,
  CWrapper,
  CName,
  CManager,
  CLink,
  CPickerWrapper
} from './layout';
import { InputColor } from '../../../../../../../store/_types';
import * as selectors from '../../../../../../../store/editor/selectors';

export type ColorComponentProps = {
  colorId: string,
  gradientId: string,
  color: InputColor,
};

const ColorComponent = (props: ColorComponentProps) => {
  const { color } = props;
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
      } else if (pickerParent.current === null) {
        document.removeEventListener('click', clickHandler, false);
      }
    };
    if (pickerParent && picker) {
      document.addEventListener('click', clickHandler, false);
    }
  };
  React.useEffect(outsideClickHandler, [picker]);

  const renderPicker = () => picker
    ? <CPickerWrapper ref={pickerParent}>
      <SketchPicker
        color={{
          r: color.color[0],
          g: color.color[1],
          b: color.color[2],
          a: color.color[3] || 1,
        }}
      />
    </CPickerWrapper>
    : null;

  return (
    <CWrapper>
      <CSample
        background={`rgba(${[...color.color]})`}
        onClick={() => togglePicker(!picker)}
      />
      <CName>
        <strong>R</strong> {color.color[0]},&nbsp;
        <strong>G</strong> {color.color[1]},&nbsp;
        <strong>B</strong> {color.color[2]},&nbsp;
        <strong>A</strong> {color.color[3] || 1}
      </CName>
      <CManager>
        <CLink
          title="Edit color"
          onClick={() => togglePicker(!picker)}
        >
          <FontAwesomeIcon icon="edit" />
        </CLink>
        <CLink
          title="Delete color"
          onClick={() => {}}
        >
          <FontAwesomeIcon icon="trash" />
        </CLink>
      </CManager>
      {renderPicker()}
    </CWrapper>
  );
};

const mapStateToProps = (state: any, ownProps: { [key: string]: string }) => ({
  color: selectors.colorById(state, ownProps.gradientId)(ownProps.colorId),
});

export const Color = connect(
  mapStateToProps,
  null,
  null,
  { pure: false },
)(ColorComponent);
