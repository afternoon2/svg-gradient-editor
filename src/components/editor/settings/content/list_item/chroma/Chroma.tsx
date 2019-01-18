import * as React from 'react';
import { connect } from 'react-redux';
import { FormFieldset } from '../../../../../form/FormFieldset';
import { FormRow } from '../../../../../form/FormRow';
import { FormRange } from '../../../../../form/FormRange';
import { FormSwitch } from '../../../../../form/FormSwitch';
import { FormSelect } from '../../../../../form/FormSelect';
import * as selectors from '../../../../../../store/editor/selectors';
import { setChromaAttribute } from '../../../../../../store/editor/actions';
import { ChromaEditionPayload } from '../../../../../../store/editor/_payloads';
import { ChromaAttributes, ColorInterpolation, ColorMode } from '../../../../../../store/_types';
import { Dispatch, bindActionCreators } from 'redux';

type ChromaAttributesComponentProps = {
  id: string,
  chromaAttributes: ChromaAttributes,
  setChromaAttribute: (payload: ChromaEditionPayload) => void,
};

const ChromaAttributesComponent = (props: ChromaAttributesComponentProps) => {
  const [ interpolations ] = React.useState([
    'linear', 'bezier',
  ]);
  const [ modes ] = React.useState([
    'rgb',
    'lch',
    'hsv',
    'lab',
    'hsi',
    'hsl',
    'hcl',
  ]);
  const {
    interpolation,
    lightnessCorrection,
    mode,
    samples,
  } = props.chromaAttributes;
  const { id, setChromaAttribute } = props;
  return (
    <FormFieldset legend="Chroma">
      <FormRow>
        <FormSelect
          label="interpolation"
          options={interpolations}
          value={interpolation}
          onChange={(event: React.ChangeEvent) => setChromaAttribute({
            id,
            attribute: 'interpolation',
            value: (event.target as HTMLInputElement).value as ColorInterpolation
          })}
        />
      </FormRow>
      {
        interpolation === 'linear'
          ? <FormRow>
            <FormSelect
              label="mode"
              options={modes}
              value={mode}
              onChange={(event: React.ChangeEvent) => setChromaAttribute({
                id,
                attribute: 'mode',
                value: (event.target as HTMLInputElement).value as ColorMode,
              })}
            />
          </FormRow>
          : null
      }
      <FormRow>
        <FormSwitch
          label="lightness correction"
          checked={lightnessCorrection}
          onChange={(value?: boolean) => setChromaAttribute({
            id,
            value: (value as boolean),
            attribute: 'lightnessCorrection',
          })}
        />
      </FormRow>
      <FormRow>
        <FormRange
          inputWidth="40%"
          labelWidth="20%"
          label="Samples"
          min={2}
          max={30}
          step={1}
          value={samples}
          onChange={(event: React.ChangeEvent) => setChromaAttribute({
            id,
            attribute: 'samples',
            value: parseInt((event.target as HTMLInputElement).value),
          })}
        />
      </FormRow>
    </FormFieldset>
  );
};

const mapStateToProps = (state: any, ownProps: { [key: string]: string }) => ({
  chromaAttributes: selectors.chromaAttributesOf(state, ownProps.id),
});

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators({
  setChromaAttribute,
}, dispatch);

export const Chroma = connect(
  mapStateToProps,
  mapDispatchToProps,
)(ChromaAttributesComponent);