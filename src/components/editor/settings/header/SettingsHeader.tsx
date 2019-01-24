import * as React from 'react';
import nanoid from 'nanoid';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import throttle from 'lodash.throttle';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FormRow } from '../../../form/FormRow';
import { FormButton } from '../../../form/FormButton';
import { AppModal } from '../../../common/AppModal';
import { SHeader, SHeaderContentDivider, SHeaderIconButton } from './layout';
import * as editorActions from '../../../../store/editor/actions';
import * as appActions from '../../../../store/application/actions';
import * as appSelectors from '../../../../store/application/selectors';
import { gradientsAmount } from '../../../../store/editor/selectors';
import { PresetForm } from '../../../presets/PresetForm';
import { PresetSelector } from './preset_selector/PresetSelector';
import { BlendModeSelector } from './blend_mode_selector/BlendModeSelector';

export type SettingsHeaderComponentProps = {
  addGradient: (id: string) => void,
  deleteAllGradients: () => void,
  openModal: () => void,
  closeModal: () => void,
  modal: boolean,
  gradientsAmount: number,
  presetRootId: string,
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
    const {
      gradientsAmount,
      openModal,
      closeModal,
      modal,
      presetRootId,
    } = this.props;
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
          {
            modal
            ? <AppModal
              heading="Save Preset"
              containerId={presetRootId}
              onClose={closeModal}
            >
              <PresetForm />
            </AppModal>
            : null
          }
        </FormRow>
        <FormRow>
          <PresetSelector />
        </FormRow>
        <FormRow>
          <BlendModeSelector />
        </FormRow>
      </SHeader>
    );
  }
};

const mapStateToProps = (state: any) => ({
  gradientsAmount: gradientsAmount(state),
  modal: appSelectors.modal(state),
})

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators({
  addGradient: editorActions.addGradient,
  deleteAllGradients: editorActions.deleteAllGradients,
  openModal: appActions.openModal,
  closeModal: appActions.closeModal,
}, dispatch);

export const SettingsHeader = connect(
  mapStateToProps,
  mapDispatchToProps,
)(SettingsHeaderComponent);
