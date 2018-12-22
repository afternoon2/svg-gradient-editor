import * as React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import nanoid from 'nanoid';
import { addGradient } from '../../../store/editor/settings/actions';
import { SettingsWrapper, SettingsHeader, SettingsContent } from './layout';
import { SearchInput } from '../../common/SearchInput';
import { GradientList } from './components/GradientList';
import { Gradient } from '../../../store/editor/_gradientTypes';

type SettingsComponentProps = {
  addGradient: (gradient: Gradient) => void,
  gradients: Gradient[],
};

class SettingsComponent extends React.Component<SettingsComponentProps> {
  public render(): React.ReactNode {
    const { gradients } = this.props;
    return (
      <SettingsWrapper>
        <SettingsHeader>
          <SearchInput
            width="100%"
            placeholder="Search..."
            disabled={gradients.length === 0}
            onChange={this.searchGradients}
          />
        </SettingsHeader>
        <SettingsContent>
          <GradientList />
        </SettingsContent>
      </SettingsWrapper>
    );
  }

  private pushGradient = () => {
    this.props.addGradient({
      isEmpty: true,
      name: '',
      id: nanoid(),
      type: 'linear',
      focalPoints: false,
      attributes: {
        x1: -1,
        y1: -1,
        x2: -1,
        y2: -1,
      },
      chroma: {
        isInput: false,
        interpolation: 'linear',
        mode: 'rgb',
        lightnessCorrection: false,
        samples: 10,
      },
      colors: [],
      output: [],
    });
  }

  searchGradients = (event: React.ChangeEvent): void => {
    
  }
}

const mapStateToProps = (state: any) => ({
  gradients: state.editor.settings.gradients,
});

const mapDispatchToProps = (dispatch: any) => bindActionCreators({
  addGradient,
}, dispatch);

export const Settings = connect(
  mapStateToProps,
  mapDispatchToProps,
  null,
  { pure: false },
)(SettingsComponent);
