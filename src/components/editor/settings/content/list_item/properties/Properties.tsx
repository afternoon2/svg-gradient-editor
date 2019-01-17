import * as React from 'react'; 
import { FormFieldset } from '../../../../../form/FormFieldset';
import { GradientType } from './type/GradientType';

type PropertiesProps = {
  id: string,
};

const Properties = (props: PropertiesProps) => {
  const { id } = props;
  return (
    <FormFieldset legend="Properties">
      <GradientType id={id} />
    </FormFieldset>
  );
};

export { Properties };
