import * as React from 'react';
import { connect } from 'react-redux';
import { FormFieldset } from '../../../../../form/FormFieldset';
import { LinearAttributes } from './linear/LinearAttributes';
import * as selectors from '../../../../../../store/editor/selectors';

type AttributesComponentProps = {
  id: string,
  gradientType: 'linear' | 'radial',
};

const AttributesComponent = (props: AttributesComponentProps) => {
  const { id, gradientType } = props;
  return (
    <FormFieldset legend="Attributes">
      {
        gradientType === 'linear'
          ? <LinearAttributes id={id} />
          : null
      }
    </FormFieldset>
  );
}

const mapStateToProps = (state: any, ownProps: { [key: string]: string }) => ({
  gradientType: selectors.typeofGradient(state, ownProps.id),
});

export const Attributes = connect(
  mapStateToProps,
  null,
)(AttributesComponent);
