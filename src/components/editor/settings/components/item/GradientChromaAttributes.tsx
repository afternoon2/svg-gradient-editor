import * as React from 'react';
import { FormRow } from './layout';
import { FormSelect } from './components/FormSelect';
import { FormSwitch } from './components/FormSwitch';
import { FormRange } from './components/FormRange';
import { ColorMode, ColorInterpolation, ChromaAttributes } from '../../../../../store/editor/_gradientTypes';

export type ChromaAttributesProps = {
  attributes: ChromaAttributes,
  onInterpolationChange: (interpolation: ColorInterpolation) => void,
  onModeChange: (mode: ColorMode) => void,
  onLightnessCorrection: (value: any) => void,
  onSamplesChange: (value: number) => void,
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
    onSamplesChange,
  } = props;
  
  return (
    <React.Fragment>
      <FormRow>
        <FormSelect
          label="Interpolation"
          options={interpolations}
          value={attributes.interpolation}
          onChange={(event: React.ChangeEvent) => onInterpolationChange(
            (event.target as HTMLInputElement).value as (ColorInterpolation),
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
      <FormRow>
        <FormRange
          width="60%"
          label="Samples"
          min={2}
          max={30}
          step={1}
          value={attributes.samples}
          onChange={(event: React.ChangeEvent) => onSamplesChange(
            parseInt(
              (event.target as HTMLInputElement).value,
              10
            ),
          )}
        />
      </FormRow>
    </React.Fragment>
  );
};