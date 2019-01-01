import * as React from 'react';
import { FormRow } from './layout';
import { FormSelect } from './components/FormSelect';
import { FormSwitch } from './components/FormSwitch';
import { ColorMode, ChromaAttributes } from '../../../../../store/editor/_gradientTypes';

export type ChromaAttributesProps = {
  attributes: ChromaAttributes,
  onInterpolationChange: (interpolation: 'linear' | 'bezier') => void,
  onModeChange: (mode: ColorMode) => void,
  onLightnessCorrection: (value: any) => void,
};

export const GradientChromaAttributes = (props: ChromaAttributesProps) => {
  
  const [ interpolations ] = React.useState([
    'linear', 'bezier',
  ]);
  const [ modes ] = React.useState([
    'rgb',
    'lch',
    'hsv',
    'lab',
    'hsl',
    'hci',
    'hcl',
  ]);
  const {
    attributes,
    onInterpolationChange,
    onModeChange,
    onLightnessCorrection,
  } = props;
  
  return (
    <React.Fragment>
      <FormRow>
        <FormSelect
          label="Interpolation"
          options={interpolations}
          value={attributes.interpolation}
          onChange={(event: React.ChangeEvent) => onInterpolationChange(
            (event.target as HTMLInputElement).value as ('linear' | 'bezier'),
          )}
        />
      </FormRow>
      {
        attributes.interpolation === 'linear' ?
        <FormRow>
          <FormSelect
            label="Mode"
            options={modes}
            value={attributes.mode}
            onChange={(event: React.ChangeEvent) => onModeChange(
              (event.target as HTMLInputElement).value as ColorMode
              )}
          />
        </FormRow> :
        null
      }
      <FormRow>
        <FormSwitch
          label="Lightness correction"
          checked={attributes.lightnessCorrection}
          onChange={onLightnessCorrection}
        />
      </FormRow>
    </React.Fragment>
  );
};