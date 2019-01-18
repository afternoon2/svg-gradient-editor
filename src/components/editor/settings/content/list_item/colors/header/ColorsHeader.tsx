import * as React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import nanoid from 'nanoid';
import { FormRow } from '../../../../../../form/FormRow';
import { FormButton } from '../../../../../../form/FormButton';
import { FormSwitch } from '../../../../../../form/FormSwitch';
import * as selectors from '../../../../../../../store/editor/selectors';
import * as actions from '../../../../../../../store/editor/actions';
import * as thunks from '../../../../../../../store/editor/thunks';
import * as payloads from '../../../../../../../store/editor/_payloads';

type ColorsHeaderComponentProps = {
  id: string,
  colorsAmount: number,
  chroma: boolean,
  addColor: (payload: payloads.ColorPayload) => (dispatch: Dispatch) => void,
  deleteAllColors: (payload: string) => void,
  toggleChroma: (payload: string) => void,
};

class ColorsHeaderComponent extends React.PureComponent<ColorsHeaderComponentProps> {
  public render() {
    const {
      colorsAmount,
      addColor,
      id,
      deleteAllColors,
      toggleChroma,
      chroma,
    } = this.props;
    return (
      <React.Fragment>
        <FormRow>
          <FormButton
            style={{ marginRight: '1em' }}
            title="Add Color"
            onClick={(event?: React.MouseEvent) => {
              (event as React.MouseEvent).preventDefault();
              addColor({
                gradientId: id,
                colorId: nanoid(),
              })
            }}
          >
            Add Color
          </FormButton>
          <FormButton
            disabled={colorsAmount < 1}
            level="danger"
            onClick={(event?: React.MouseEvent) => {
              (event as React.MouseEvent).preventDefault();
              deleteAllColors(id);
            }}
            title="Delete All"
          >
            Delete All
          </FormButton>
        </FormRow>
        <FormRow>
          <FormSwitch
            label="Use chroma"
            checked={chroma}
            disabled={colorsAmount < 2}
            onChange={() => toggleChroma(id)}
          />
        </FormRow>
      </React.Fragment>
    );
  }
};

const mapStateToProps = (state: any, ownProps: { [key: string]: string }) => ({
  colorsAmount: selectors.colorsAmountInGradient(state, ownProps.id),
  chroma: selectors.isUsingChroma(state, ownProps.id),
});

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators({
  addColor: thunks.addColor,
  deleteAllColors: actions.deleteAllColors,
  toggleChroma: thunks.toggleChroma,
}, dispatch);

export const ColorsHeader = connect(
  mapStateToProps,
  mapDispatchToProps,
  // @ts-ignore
)(ColorsHeaderComponent);
