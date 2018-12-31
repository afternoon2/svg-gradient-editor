import * as React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import nanoid from 'nanoid';
import { addGradient } from '../../../../store/editor/settings/actions';
import { AppInput } from '../../../common/AppInput';
import { ControlsWrapper } from './layout';
import { Gradient } from '../../../../store/editor/_gradientTypes';

type ControlsComponentProps = {
  gradients: Gradient[],
  addGradient: (gradient: Gradient) => void;
};

type ControlsComponentState = {
  searchPlaceholder: string,
  addPlaceholder: string,
};

class GradientListControlsComponent extends React.Component<ControlsComponentProps> {

  public state: ControlsComponentState = {
    searchPlaceholder: 'Search...',
    addPlaceholder: 'Type gradient\'s name and press Enter',
  };

  public render(): React.ReactNode {
    const { gradients } = this.props;
    return (
      <ControlsWrapper>
        <AppInput
          width="100%"
          placeholder={this.state.searchPlaceholder}
          disabled={gradients.length === 0}
          // onChange={searchGradients}
          icon="search"
          className="settingsControlInputs"
        />
        <AppInput
          placeholder={this.state.addPlaceholder}
          title="Type gradient's name and press enter"
          disabled={false}
          width="100%"
          icon="plus"
          className="settingsControlInputs"
          onKeyDown={this.pushGradient}
        />
      </ControlsWrapper>
    );
  }

  private pushGradient = (event: React.KeyboardEvent) => {
    const { addGradient } = this.props;
    if (
      (event.target as HTMLInputElement).value.length > 0 &&
      event.key === 'Enter'
    ) {
      const gradient: Gradient = {
        isEmpty: true,
        name: (event.target as HTMLInputElement).value,
        id: nanoid(),
        type: 'linear',
        focalPoints: false,
        attributes: {
          x1: 0,
          y1: 0,
          x2: 0,
          y2: 0,
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
      };
      addGradient(gradient);
      (event.target as HTMLInputElement).value = '';
    }

  }
}

const mapStateToProps = (state: any) => ({
  gradients: state.editor.settings.gradients,
});

const mapDispatchToProps = (dispatch: any) => bindActionCreators({
  addGradient,
}, dispatch);

export const GradientListControls = connect(
  mapStateToProps,
  mapDispatchToProps,
  null,
  { pure: false },
)(GradientListControlsComponent);
