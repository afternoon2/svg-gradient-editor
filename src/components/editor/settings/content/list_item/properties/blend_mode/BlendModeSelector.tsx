import * as React from 'react';
import { connect } from 'react-redux';
import { Dispatch, bindActionCreators } from 'redux';
import { FormRow } from '../../../../../../form/FormRow';
import { FormSelect } from '../../../../../../form/FormSelect';
import { BlendMode, BlendModeObject } from '../../../../../../../store/_types';
import { setLocalBlendMode } from '../../../../../../../store/editor/actions';
import { LocalBlendModePayload } from '../../../../../../../store/editor/_payloads';
import { localBlendMode } from '../../../../../../../store/editor/selectors';

type BlendModeComponentProps = {
  id: string,
  blendMode: BlendModeObject,
  setLocalBlendMode: (payload: LocalBlendModePayload) => void,
};

const BlendModeComponent = (props: BlendModeComponentProps) => {
  const [ modes ] = React.useState([
    'normal',
    'multiply',
    'screen',
    'overlay',
    'darken',
    'lighten',
    'color-dodge',
    'color-burn',
    'hard-light',
    'soft-light',
    'difference',
    'exclusion',
    'hue',
    'saturation',
    'color',
    'luminosity'
  ]);
  const { blendMode, id, setLocalBlendMode } = props;
  return (
    <FormRow>
      <FormSelect
        label="Blend mode"
        value={blendMode.mode}
        options={modes}
        onChange={(event: React.ChangeEvent) => {
          setLocalBlendMode({
            id,
            blendMode: (event.target as HTMLInputElement).value as BlendMode,
          })
        }}
      />
    </FormRow>
  );
};

const mapStateToProps = (state: any, ownProps: { [key: string]: string }) => ({
  blendMode: localBlendMode(state, ownProps.id),
});

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators({
  setLocalBlendMode,
}, dispatch);

export const BlendModeSelector = connect(
  mapStateToProps,
  mapDispatchToProps,
)(BlendModeComponent as React.ComponentType);
