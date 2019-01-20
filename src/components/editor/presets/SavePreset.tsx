import * as React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { gradients } from '../../../store/editor/selectors';
import { Gradient } from '../../../store/_types';
import { Modal } from '../../common/Modal';
import { AppInput } from '../../common/AppInput';

type SavePresetComponentProps = {
  gradients: Gradient[],
  closeHandler: () => void,
};

const SavePresetComponent = (props: SavePresetComponentProps) => {
  const { closeHandler } = props;
  return (
    <Modal
      heading="Save Preset"
      closeHandler={closeHandler}
    >
      <AppInput
        width="100%"
        placeholder="Preset name"
        disabled={false}
      />
    </Modal>
  );
};

const mapStateToProps = (state: any) => ({
  gradients: gradients(state),
});

export const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators({

}, dispatch);

export const SavePreset = connect(
  mapStateToProps,
  mapDispatchToProps,
)(SavePresetComponent);
