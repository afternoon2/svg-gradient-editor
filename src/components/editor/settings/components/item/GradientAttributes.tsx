import * as React from 'react';
import { FormNumber } from './components/FormNumber';
import { FormSelect } from './components/FormSelect';
import { FormRow } from './layout';
import { LinearGradientAttributes, RadialGradientAttributes } from '../../../../../store/editor/_gradientTypes';

export type GradientAttributesProps = {
  attributes: LinearGradientAttributes | RadialGradientAttributes,
  type: 'linear' | 'radial',
  onAttributeChange: (event: React.ChangeEvent, label: string, value: number | string) => void,
  focalPoints?: boolean,
};

export const GradientAttributes = (props: GradientAttributesProps): JSX.Element => {
  const { attributes, type, onAttributeChange, focalPoints } = props;
  const [ spreadMethods ] = React.useState([
    'none',
    'pad',
    'repeat',
    'reflect',
  ]);
  if (type === 'linear') {
    return (
      <React.Fragment>
        <FormRow>
          <FormNumber
            label="x1"
            min={-1}
            max={1}
            step={0.01}
            value={(attributes as LinearGradientAttributes).x1}
            onChange={(event: React.ChangeEvent) => onAttributeChange(
              event,
              'x1',
              parseFloat((event.target as HTMLInputElement).value),
            )}
          />
        </FormRow>
        <FormRow>
          <FormNumber
            label="y1"
            min={-1}
            max={1}
            step={0.01}
            value={(attributes as LinearGradientAttributes).y1}
            onChange={(event: React.ChangeEvent) => onAttributeChange(
              event,
              'y1',
              parseFloat((event.target as HTMLInputElement).value),
            )}
          />
        </FormRow>
        <FormRow>
          <FormNumber
            label="x2"
            min={-1}
            max={1}
            step={0.01}
            value={(attributes as LinearGradientAttributes).x2}
            onChange={(event: React.ChangeEvent) => onAttributeChange(
              event,
              'x2',
              parseFloat((event.target as HTMLInputElement).value),
            )}
          />
        </FormRow>
        <FormRow>
          <FormNumber
            label="y2"
            min={-1}
            max={1}
            step={0.01}
            value={(attributes as LinearGradientAttributes).y2}
            onChange={(event: React.ChangeEvent) => onAttributeChange(
              event,
              'y2',
              parseFloat((event.target as HTMLInputElement).value),
            )}
          />
        </FormRow>
      </React.Fragment>
    );
  } else {
    return (
      <React.Fragment>
        <FormRow>
          <FormNumber
            label="cx"
            min={-1}
            max={1}
            step={0.01}
            value={(attributes as RadialGradientAttributes).cx}
            onChange={(event: React.ChangeEvent) => onAttributeChange(
              event,
              'cx',
              parseFloat((event.target as HTMLInputElement).value),
            )}
          />
        </FormRow>
        <FormRow>
          <FormNumber
            label="cy"
            min={-1}
            max={1}
            step={0.01}
            value={(attributes as RadialGradientAttributes).cy}
            onChange={(event: React.ChangeEvent) => onAttributeChange(
              event,
              'cy',
              parseFloat((event.target as HTMLInputElement).value),
            )}
          />
        </FormRow>
        <FormRow>
          <FormNumber
            label="r"
            min={0}
            max={1}
            step={0.01}
            value={(attributes as RadialGradientAttributes).r}
            onChange={(event: React.ChangeEvent) => onAttributeChange(
              event,
              'r',
              parseFloat((event.target as HTMLInputElement).value),
            )}
          />
        </FormRow>
        {
          focalPoints ?
            <React.Fragment>
              <FormRow>
                <FormNumber
                  label="fx"
                  min={0}
                  max={1}
                  step={0.01}
                  value={(attributes as RadialGradientAttributes).fx as number}
                  onChange={(event: React.ChangeEvent) => onAttributeChange(
                    event,
                    'fx',
                    parseFloat((event.target as HTMLInputElement).value),
                  )}
                />
              </FormRow>
              <FormRow>
                <FormNumber
                  label="fy"
                  min={0}
                  max={1}
                  step={0.01}
                  value={(attributes as RadialGradientAttributes).fy as number}
                  onChange={(event: React.ChangeEvent) => onAttributeChange(
                    event,
                    'fy',
                    parseFloat((event.target as HTMLInputElement).value),
                  )}
                />
              </FormRow>
            </React.Fragment> :
            null
        }
        <FormRow>
          <FormSelect
            label="Spread method"
            options={spreadMethods}
            value={(attributes as RadialGradientAttributes).spreadMethod}
            onChange={(event: React.ChangeEvent) => onAttributeChange(
              event,
              'spreadMethod',
              (event.target as HTMLInputElement).value,
            )}
          />
        </FormRow>
      </React.Fragment>
    )
  }
};
