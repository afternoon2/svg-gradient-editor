import * as React from 'react';
import styled from '../../styles/styledComponents';
import { FormLabel } from './FormLabel';

export const FSelect = styled.select`
  color: ${props => props.theme.colors.text};
  background-color: ${props => props.theme.colors.main_400};
  &:hover {
    cursor: pointer;
  }
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
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
  placeholder?: string,
  disabled?: boolean
};

export const FormSelect = (props: FormSelectProps) => {
  
  const {
    disabled,
    label,
    options,
    value,
    onChange,
    placeholder,
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
        defaultValue={placeholder ? 'default' : undefined}
        disabled={disabled}
      >
        {
          placeholder
            ? <option
              value="default"
              disabled
            >
              {placeholder}
            </option>
            : null
        }
        {renderOpts()}
      </FSelect>
    </React.Fragment>
  );
};