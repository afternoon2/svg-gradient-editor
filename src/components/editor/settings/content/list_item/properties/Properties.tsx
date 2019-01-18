import * as React from 'react';
import { connect } from 'react-redux';
import { typeofGradient } from '../../../../../../store/editor/selectors';
import { FormFieldset } from '../../../../../form/FormFieldset';
import { GradientType } from './type/GradientType';
import { FocalPoints } from './focal_points/FocalPoints';

type PropertiesComponentProps = {
  id: string,
  type: 'linear' | 'radial',
};

const PropertiesComponent = (props: PropertiesComponentProps) => {
  const { id, type } = props;
  return (
    <FormFieldset legend="Properties">
      <GradientType id={id} />
      {
        type === 'radial'
        ? <FocalPoints id={id} />
        : null
      }
    </FormFieldset>
  );
};

const mapStateToProps = (state: any, ownProps: { [key: string]: string }) => ({
  type: typeofGradient(state, ownProps.id),
});

export const Properties = connect(
  mapStateToProps,
  null,
)(PropertiesComponent);
