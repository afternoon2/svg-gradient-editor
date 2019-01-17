import * as React from 'react';
import nanoid from 'nanoid';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import throttle from 'lodash.throttle';
import { FormRow } from '../../../form/FormRow';
import { FormButton } from '../../../form/FormButton';
import { SHeader } from './layout';
import * as actions from '../../../../store/editor/actions';

export type SettingsHeaderComponentProps = {
  addGradient: (id: string) => void,
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

  public render() {
    return (
      <SHeader>
        <FormRow>
          <FormButton
            onClick={this.createGradient}
          >
            Add Gradient
          </FormButton>
        </FormRow>
      </SHeader>
    );
  }
};

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators({
  addGradient: actions.addGradient,
}, dispatch);

export const SettingsHeader = connect(
  null,
  mapDispatchToProps,
  null,
  { pure: true },
)(SettingsHeaderComponent);
