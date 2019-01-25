import * as React from 'react';
import { connect } from 'react-redux';
import { Dispatch, bindActionCreators } from 'redux';
import { BlendMode } from '../../../../../store/_types';
import { FormSelect } from '../../../../form/FormSelect';
import { blendMode } from '../../../../../store/editor/selectors';
import { setGlobalBlendMode } from '../../../../../store/editor/actions';

export type BlendModeSelectorComponentProps = {
  blendMode: BlendMode,
  setGlobalBlendMode: (mode: BlendMode) => void,
};

const BlendModeSelectorComponent = (props: BlendModeSelectorComponentProps) => {
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
  const { blendMode, setGlobalBlendMode } = props;
  return (
    <FormSelect
      label="Global blend mode"
      options={modes}
      value={blendMode}
      onChange={(event: React.ChangeEvent) => setGlobalBlendMode(
        (event.target as HTMLSelectElement).value as BlendMode)
      }
      placeholder="Select preset"
    />
  );
};

const mapStateToProps = (state: any) => ({
  blendMode: blendMode(state),
});

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators({
  setGlobalBlendMode,
}, dispatch);

export const BlendModeSelector = connect(
  mapStateToProps,
  mapDispatchToProps,
)(BlendModeSelectorComponent);
