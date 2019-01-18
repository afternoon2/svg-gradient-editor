
import * as React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { FormRow } from '../../../../../../form/FormRow';
import { FormSwitch } from '../../../../../../form/FormSwitch';
import * as selectors from '../../../../../../../store/editor/selectors';
import { toggleFocalPoints } from '../../../../../../../store/editor/actions';

type FocalPointsComponentProps = {
  id: string,
  focalPoints: boolean,
  toggleFocalPoints: (payload: string) => boolean,
};

const FocalPointsComponent = (props: FocalPointsComponentProps) => {
  const { focalPoints, id, toggleFocalPoints } = props;
  return (
    <FormRow>
      <FormSwitch
        label="focal points"
        checked={focalPoints}
        onChange={() => toggleFocalPoints(id)}
      />
    </FormRow>
  );
};

const mapStateToProps = (state: any, ownProps: { [key: string]: string }) => ({
  focalPoints: selectors.hasFocalPoints(state, ownProps.id),
});

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators({
  toggleFocalPoints,
}, dispatch);

export const FocalPoints = connect(
  mapStateToProps,
  mapDispatchToProps,
)(FocalPointsComponent as React.ComponentType);
