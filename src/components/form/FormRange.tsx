import * as React from 'react';
import { FormLabel } from './FormLabel';
import styled from '../../styles/styledComponents';
import { modularSize } from '../../styles/typography';
import { AppTheme } from '../../styles/themes';

type FRangeInputProps = {
  width?: string,
};

const thumbStyles = (theme: AppTheme): string => `
  height: 16px;
  width: 16px;
  border-radius: 4px;
  background: ${theme.colors.primary};
`;

const trackStyles = (theme: AppTheme): string => `
  width: 100%;
  height: 16px;
  cursor: pointer;
  background: ${theme.colors.main_300};
  border-radius: 4px;
  border: none;
`;

const FRangeInput = styled.input<FRangeInputProps>`
  -webkit-appearance: none;
  margin-right: .5em;
  background: transparent;
  width: ${props => props.width || '100%'};
  height: 35px;

  &:hover {
    cursor: pointer;
  }

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    ${props => thumbStyles(props.theme)};
  }

  &::-moz-range-thumb {
    ${props => thumbStyles(props.theme)};
  }

  &::-ms-thumb {
    ${props => thumbStyles(props.theme)};
  }

  &:focus {
    outline: none;
  }

  &::ms-track {
    width: ${props => props.width || '100%'};
    cursor: pointer;
    background: transparent;
    border-color: transparent;
    color: transparent;
    ${props => trackStyles(props.theme)};
  }

  &::-webkit-slider-runnable-track {
    ${props => trackStyles(props.theme)};
  }
  
  &::-moz-range-track {
    ${props => trackStyles(props.theme)};
  }
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
  inputWidth: string,
  labelWidth: string,
};

export const FormRange = (props: FormRangeProps) => {
  const {
    label,
    value,
    min,
    max,
    step,
    onChange,
    inputWidth,
    labelWidth,
  } = props;
  return (
    <React.Fragment>
      <FormLabel style={{ width: labelWidth }}>
        {label}:
      </FormLabel>
      <FRangeInput
        width={inputWidth}
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