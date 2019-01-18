import * as React from 'react';
import nanoid from 'nanoid';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import throttle from 'lodash.throttle';
import { FormRow } from '../../../form/FormRow';
import { FormButton } from '../../../form/FormButton';
import { SHeader } from './layout';
import * as actions from '../../../../store/editor/actions';
import { gradientsAmount } from '../../../../store/editor/selectors';

export type SettingsHeaderComponentProps = {
  addGradient: (id: string) => void,
  deleteAllGradients: () => void,
  gradientsAmount: number,
};

class SettingsHeaderComponent extends React.PureComponent<SettingsHeaderComponentProps> {

  createGradient = (event?: React.MouseEvent) => {
    const { addGradient } = this.props;
    const throttled = throttle(
      () => addGradient(nanoid()),
      500,
    );
    (event as React.MouseEvent).preventDefault();
    throttled();
  };

  deleteAllGradients = () => this.props.deleteAllGradients();

  public render() {
    const { gradientsAmount } = this.props;
    return (
      <SHeader>
        <FormRow>
          <FormButton
            onClick={this.createGradient}
          >
            Add Gradient
          </FormButton>
          <FormButton
            style={{
              marginLeft: '0.5em',
            }}
            level="danger"
            onClick={this.deleteAllGradients}
            disabled={gradientsAmount === 0}
          >
            Delete All
          </FormButton>
        </FormRow>
      </SHeader>
    );
  }
};

const mapStateToProps = (state: any) => ({
  gradientsAmount: gradientsAmount(state),
})

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators({
  addGradient: actions.addGradient,
  deleteAllGradients: actions.deleteAllGradients,
}, dispatch);

export const SettingsHeader = connect(
  mapStateToProps,
  mapDispatchToProps,
  null,
  { pure: true },
)(SettingsHeaderComponent);
