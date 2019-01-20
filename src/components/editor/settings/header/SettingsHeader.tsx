import * as React from 'react';
import nanoid from 'nanoid';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import throttle from 'lodash.throttle';
import { FormRow } from '../../../form/FormRow';
import { FormButton } from '../../../form/FormButton';
import { SHeader, SHeaderLink, SHeaderContentDivider } from './layout';
import * as editorActions from '../../../../store/editor/actions';
import * as appActions from '../../../../store/application/actions';
import { gradientsAmount, currentModal } from '../../../../store/editor/selectors';
import { AppModal } from '../../../../store/application/_types';
import { SavePreset } from '../../../editor/presets/SavePreset';

export type SettingsHeaderComponentProps = {
  addGradient: (id: string) => void,
  deleteAllGradients: () => void,
  setModal: (modal: AppModal) => void,
  clearModal: () => void,
  modal: AppModal,
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
    const { gradientsAmount, setModal, clearModal, modal } = this.props;
    return (
      <SHeader>
        <FormRow style={{
          justifyContent: 'space-between',
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
            <SHeaderLink
              title="Open preset list"
              onClick={() => setModal('presetEdit')}
            >
              <FontAwesomeIcon icon="clipboard-list" />
            </SHeaderLink>
            <SHeaderLink
              title="Save preset"
              onClick={() => setModal('presetSave')}
            >
              <FontAwesomeIcon icon="save" />
            </SHeaderLink>
          </SHeaderContentDivider>
        </FormRow>
      </SHeader>
    );
  }
};

const mapStateToProps = (state: any) => ({
  gradientsAmount: gradientsAmount(state),
  modal: currentModal(state),
});

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators({
  addGradient: editorActions.addGradient,
  deleteAllGradients: editorActions.deleteAllGradients,
  setModal: appActions.setModal,
  clearModal: appActions.clearModal,
}, dispatch);

export const SettingsHeader = connect(
  mapStateToProps,
  mapDispatchToProps,
  null,
  { pure: true },
)(SettingsHeaderComponent);
