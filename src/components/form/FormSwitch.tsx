import * as React from 'react';
import nanoid from 'nanoid';
import Switch from 'react-switch';
import { FormLabel } from './FormLabel';

export type FormSwitchProps = {
  label: string,
  checked: boolean,
  onChange: (value: boolean) => void,
  disabled?: boolean,
};

export const FormSwitch = (props: FormSwitchProps) => {
  const { label, checked, onChange, disabled } = props;
  return (
    <React.Fragment>
      <FormLabel>
        {label}:
      </FormLabel>
      <Switch
        id={nanoid()}
        checked={checked}
        width={35}
        height={20}
        checkedIcon={false}
        uncheckedIcon={false}
        onChange={onChange}
        onColor="#5383D6"
        offColor="#A4BCAD"
        disabled={disabled || false}
      />
    </React.Fragment>
  );
};