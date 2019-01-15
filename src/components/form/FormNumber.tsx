import * as React from 'react';
import { rgba } from 'polished';
import styled from '../../styles/styledComponents';
import { FormLabel } from './FormLabel';

const FNumber = styled.input`
  color: ${props => props.theme.colors.text};
  background-color: ${props => props.theme.colors.main_400};
  border: 1px solid ${props => rgba(props.theme.colors.text, 0.45)};
  border-radius: 4px;
  padding: .3em;
`;

export type FormNumberProps = {
  label: string,
  value: number,
  min: number,
  max: number,
  step: number,
  onChange?: any,
};

export const FormNumber = (props: FormNumberProps) => {

  const {
    label,
    value,
    min,
    max,
    step,
    onChange,
  } = props;

  return (
    <React.Fragment>
      <FormLabel>
        {label}:
      </FormLabel>
      <FNumber
        type="number"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={onChange}
      />
    </React.Fragment>
  );
};
