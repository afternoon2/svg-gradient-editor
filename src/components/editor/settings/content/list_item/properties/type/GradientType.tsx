import * as React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux'; 
import { FormRow } from '../../../../../../form/FormRow';
import { FormSelect } from '../../../../../../form/FormSelect';
import * as selectors from '../../../../../../../store/editor/selectors';
import * as payloads from '../../../../../../../store/editor/_payloads';
import { setGradientType } from '../../../../../../../store/editor/actions';

type GradientTypeComponentProps = {
  id: string,
  gradientType: 'linear' | 'radial',
  setGradientType: (payload: payloads.GradientTypePayload) => void,
};

const GradientTypeComponent = (props: GradientTypeComponentProps) => {
  const [ options ] = React.useState(['linear', 'radial']);
  const { id, gradientType, setGradientType } = props;
  return (
    <FormRow>
      <FormSelect
        options={options}
        label="Type"
        value={gradientType}
        onChange={(event?: React.ChangeEvent) => setGradientType({
          id,
          type: ((event as React.ChangeEvent).target as HTMLSelectElement).value as 'linear' | 'radial',
        })}
      />
    </FormRow>
  );
};

const mapStateToProps = (state: any, ownProps: { [key: string]: string }) => ({
  gradientType: selectors.typeofGradient(state, ownProps.id),
});

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators({
  setGradientType,
}, dispatch);

export const GradientType = connect(
  mapStateToProps,
  mapDispatchToProps,
)(GradientTypeComponent);
