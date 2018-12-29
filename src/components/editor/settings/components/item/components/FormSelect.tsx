import * as React from 'react';
import styled from '../../../../../../styles/styledComponents';
import { FormLabel } from '../layout';

export const FSelect = styled.select`
  color: ${props => props.theme.colors.text};
  background-color: ${props => props.theme.colors.main_400};
`;

export type FormSelectOption = {
  text: string,
  value: string,
};

export type FormSelectProps = {
  label: string,
  options: string[],
  value?: string,
  onChange?: any,
};

export const FormSelect = (props: FormSelectProps) => {
  
  const {
    label,
    options,
    value,
    onChange,
  } = props;

  const renderOpts = () => options.map((opt: string): JSX.Element => (
    <option
      key={opt}
      value={opt}
    >
      {opt}
    </option>
  ));

  return (
    <React.Fragment>
      <FormLabel>
        {label}:
      </FormLabel>
      <FSelect
        value={value}
        onChange={onChange}
      >
        {renderOpts()}
      </FSelect>
    </React.Fragment>
  );
};