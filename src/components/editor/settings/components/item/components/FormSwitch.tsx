import * as React from 'react';
import nanoid from 'nanoid';
import Switch from 'react-switch';
import { FormLabel } from '../layout';

export type FormSwitchProps = {
  label: string,
  checked: boolean,
  onChange: (value: boolean) => void,
};

export const FormSwitch = (props: FormSwitchProps) => {
  const { label, checked, onChange } = props;
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
      />
    </React.Fragment>
  );
};