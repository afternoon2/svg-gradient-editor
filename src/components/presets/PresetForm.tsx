import * as React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { presetList } from '../../store/application/selectors';
import { gradients } from '../../store/editor/selectors';
import * as appActions from '../../store/application/actions';
import { FormRow } from '../form/FormRow';
import { FormButton } from '../form/FormButton';
import { AppInput } from '../common/AppInput';
import { savePreset } from '../../utils/presets';
import { Preset, Gradient } from '../../store/_types';

type PresetFormComponentProps = {
  presets: Preset[],
  gradients: Gradient[],
  onCancel: () => void,
};

export const PresetFormComponent = (props: PresetFormComponentProps) => {
  const { presets, gradients, onCancel } = props;
  const [ presetName, setPresetName ] = React.useState('');
  const [ error, setError ] = React.useState(false);
  
  const isDuplicatedName = (name: string): boolean =>
    presets.findIndex((preset: Preset) => preset.name === name) > -1;

  const typeHandler = (event: React.ChangeEvent) => {
    const newName: string = (event.target as HTMLInputElement).value;
    setPresetName(newName);
    console.log(isDuplicatedName(newName));
    if (isDuplicatedName(newName)) {
      setError(true);
    } else {
      setError(false);
    }
  };

  const keydownHandler = (event: React.KeyboardEvent) => {
    if (
      presetName.length > 0 &&
      !error &&
      event.key === 'Enter'
    ) {
      onSave();
    }
  };

  const onSave = () => {
    savePreset({
      name: presetName,
      value: gradients,
    });
    onCancel();
  };

  return (
    <React.Fragment>
      <FormRow>
        <AppInput
          placeholder="Preset name"
          error={error}
          errorMessage="Preset name must be unique"
          onChange={typeHandler}
          onKeyDown={keydownHandler}
          value={presetName}
        />
      </FormRow>
      <FormRow
        style={{
          justifyContent: 'flex-end',
        }}
      >
        <FormButton
          level="danger"
          onClick={onCancel}
          style={{
            marginRight: '.5em',
          }}
        >
          Cancel
        </FormButton>
        <FormButton
          onClick={onSave}
          disabled={presetName.length === 0 || error}
        >
          Save
        </FormButton>
      </FormRow>
    </React.Fragment>
  );
};

const mapStateToProps = (state: any) => ({
  presets: presetList(state),
  gradients: gradients(state),
});

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators({
  onCancel: appActions.closeModal,
}, dispatch);

export const PresetForm = connect(
  mapStateToProps,
  mapDispatchToProps,
)(PresetFormComponent);
