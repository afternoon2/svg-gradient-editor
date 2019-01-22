import * as React from 'react';
import { connect } from 'react-redux';
import { Dispatch, bindActionCreators } from 'redux';
import * as appSelectors from '../../../../../store/application/selectors';
import { Preset } from '../../../../../store/_types';
import { selectPreset } from '../../../../../store/application/thunks';
import { FormSelect } from '../../../../form/FormSelect';

export type PresetSelectorComponentProps = {
  presets: Preset[],
  selected: string,
  selectPreset: (preset: string) => void,
};

const PresetSelectorComponent = (props: PresetSelectorComponentProps) => {
  const { presets, selectPreset, selected } = props;
  const mapPresets = (presets: Preset[]): string[] => presets
    .map((preset: Preset): string => preset.name);
  return (
    <FormSelect
      label="Preset"
      options={mapPresets(presets)}
      value={selected}
      onChange={(event: React.ChangeEvent) => selectPreset(
        (event.target as HTMLSelectElement).value)
      }
      placeholder="Select preset"
      disabled={presets.length === 0}
    />
  );
};

const mapStateToProps = (state: any) => ({
  presets: appSelectors.presetList(state),
  selected: appSelectors.selectedPreset(state),
});

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators({
  selectPreset,
}, dispatch);

export const PresetSelector = connect(
  mapStateToProps,
  mapDispatchToProps,
)(PresetSelectorComponent as React.ComponentType);
