import * as React from 'react';
import nanoid from 'nanoid';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import throttle from 'lodash.throttle';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FormRow } from '../../../form/FormRow';
import { FormButton } from '../../../form/FormButton';
import { SHeader, SHeaderContentDivider, SHeaderIconButton } from './layout';
import * as editorActions from '../../../../store/editor/actions';
import * as appActions from '../../../../store/application/actions';
import { gradientsAmount } from '../../../../store/editor/selectors';

export type SettingsHeaderComponentProps = {
  addGradient: (id: string) => void,
  deleteAllGradients: () => void,
  openModal: () => void,
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
    const { gradientsAmount, openModal } = this.props;
    return (
      <SHeader>
        <FormRow style={{
          justifyContent: 'space-between'
        }}>
          <SHeaderContentDivider>
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
          </SHeaderContentDivider>
          <SHeaderContentDivider>
            <SHeaderIconButton
              title="Save as a preset"
              onClick={openModal}
              disabled={gradientsAmount === 0}
            >
              <FontAwesomeIcon
                icon="save"
                size="2x"
              />
            </SHeaderIconButton>
          </SHeaderContentDivider>
        </FormRow>
      </SHeader>
    );
  }
};

const mapStateToProps = (state: any) => ({
  gradientsAmount: gradientsAmount(state),
})

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators({
  addGradient: editorActions.addGradient,
  deleteAllGradients: editorActions.deleteAllGradients,
  openModal: appActions.openModal,
}, dispatch);

export const SettingsHeader = connect(
  mapStateToProps,
  mapDispatchToProps,
  null,
  { pure: true },
)(SettingsHeaderComponent);
