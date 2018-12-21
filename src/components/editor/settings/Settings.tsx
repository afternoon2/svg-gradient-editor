import * as React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import nanoid from 'nanoid';
import { addGradient } from '../../../store/editor/settings/actions';
import { SettingsWrapper, SettingsHeader, IconButton } from './layout';
import { Gradient } from '../../../store/editor/_gradientTypes';

type SettingsComponentProps = {
  addGradient: (gradient: Gradient) => void,
};

class SettingsComponent extends React.Component<SettingsComponentProps> {
  public render(): React.ReactNode {
    return (
      <SettingsWrapper>
        <SettingsHeader>
          <IconButton
            title="Add Gradient"
            onClick={this.pushGradient}
          >
            <FontAwesomeIcon icon="plus" size="2x" />
          </IconButton>
        </SettingsHeader>
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
}

const mapDispatchToProps = (dispatch: any) => bindActionCreators({
  addGradient,
}, dispatch);

export const Settings = connect(
  null,
  mapDispatchToProps,
  null,
  { pure: false },
)(SettingsComponent);
