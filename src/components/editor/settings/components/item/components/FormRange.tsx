import * as React from 'react';
import { FormLabel } from '../layout';
import styled from '../../../../../../styles/styledComponents';
import { modularSize } from '../../../../../../styles/typography';

type FRangeInputProps = {
  width?: string,
};

const FRangeInput = styled.input<FRangeInputProps>`
  width: ${props => props.width || '100%'};
  height: 35px;
`;

const FRangeValue = styled.span`
  width: auto;
  font-weight: bold;
  font-size: ${modularSize(-1)};
`;

export type FormRangeProps = {
  label: string,
  value: number,
  min: number,
  max: number,
  step: number,
  onChange: (event: React.ChangeEvent) => void,
  width?: string,
};

export const FormRange = (props: FormRangeProps) => {
  const {
    label,
    value,
    min,
    max,
    step,
    onChange,
    width,
  } = props;
  return (
    <React.Fragment>
      <FormLabel>
        {label}:
      </FormLabel>
      <FRangeInput
        width={width}
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={onChange}
      />
      <FRangeValue>
        {value}
      </FRangeValue>
    </React.Fragment>
  );
};