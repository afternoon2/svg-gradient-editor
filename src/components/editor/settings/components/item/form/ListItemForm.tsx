import * as React from 'react';
// import Switch from 'react-switch';
import { withTheme } from 'styled-components';
import { Gradient } from '../../../../../../store/editor/_gradientTypes';
import { AppTheme } from '../../../../../../styles/themes';
import { FormRow } from './layout';
import { FormSelect } from './components/controls/FormSelect';
import { FormFieldset } from './components/controls/FormFieldset';

export type ListItemFormProps = {
  gradient: Gradient,
  theme?: AppTheme,
};

export const ListItemForm = withTheme(
  (props: ListItemFormProps) => {

    const { gradient, theme } = props;

    const [ types ] = React.useState([
      'linear',
      'radial',
    ]);

    return (
      <React.Fragment>
        <FormRow>
          <FormFieldset legend="Properties">
            <FormSelect
            value={gradient.type}
            options={types}
            label="Type"
            onChange={() => {}}
          />
          </FormFieldset>
        </FormRow>
        <FormRow>
          <FormFieldset legend="Attributes">
          </FormFieldset>
        </FormRow>
        <FormRow>
          <FormFieldset legend="Colors">
          </FormFieldset>
        </FormRow>
        <FormRow>
          <FormFieldset legend="Chroma.js">
          </FormFieldset>
        </FormRow>
        <FormRow>
          <FormFieldset legend="Output">
          </FormFieldset>
        </FormRow>

      </React.Fragment>
    );
  },
);
