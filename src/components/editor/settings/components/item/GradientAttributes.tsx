import * as React from 'react';
import { FormNumber } from './components/FormNumber';
import { FormSelect } from './components/FormSelect';
import { FormRow } from './layout';
import { LinearGradientAttributes, RadialGradientAttributes } from '../../../../../store/editor/_gradientTypes';

export type GradientAttributesProps = {
  attributes: LinearGradientAttributes | RadialGradientAttributes,
  type: 'linear' | 'radial',
  onAttributeChange: (event: React.ChangeEvent, label: string, value: number | string) => void,
};

export const GradientAttributes = (props: GradientAttributesProps): JSX.Element => {
  const { attributes, type, onAttributeChange } = props;
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
            min={-10000}
            max={10000}
            step={1}
            value={(attributes as LinearGradientAttributes).x1}
            onChange={(event: React.ChangeEvent) => onAttributeChange(
              event,
              'x1',
              parseInt((event.target as HTMLInputElement).value, 10),
            )}
          />
        </FormRow>
        <FormRow>
          <FormNumber
            label="y1"
            min={-10000}
            max={10000}
            step={1}
            value={(attributes as LinearGradientAttributes).y1}
            onChange={(event: React.ChangeEvent) => onAttributeChange(
              event,
              'y1',
              parseInt((event.target as HTMLInputElement).value, 10),
            )}
          />
        </FormRow>
        <FormRow>
          <FormNumber
            label="x2"
            min={-10000}
            max={10000}
            step={1}
            value={(attributes as LinearGradientAttributes).x2}
            onChange={(event: React.ChangeEvent) => onAttributeChange(
              event,
              'x2',
              parseInt((event.target as HTMLInputElement).value, 10),
            )}
          />
        </FormRow>
        <FormRow>
          <FormNumber
            label="y2"
            min={-10000}
            max={10000}
            step={1}
            value={(attributes as LinearGradientAttributes).y2}
            onChange={(event: React.ChangeEvent) => onAttributeChange(
              event,
              'y2',
              parseInt((event.target as HTMLInputElement).value, 10),
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
            min={-10000}
            max={10000}
            step={1}
            value={(attributes as RadialGradientAttributes).cx}
            onChange={(event: React.ChangeEvent) => onAttributeChange(
              event,
              'cx',
              parseInt((event.target as HTMLInputElement).value, 10),
            )}
          />
        </FormRow>
        <FormRow>
          <FormNumber
            label="cy"
            min={-10000}
            max={10000}
            step={1}
            value={(attributes as RadialGradientAttributes).cy}
            onChange={(event: React.ChangeEvent) => onAttributeChange(
              event,
              'cy',
              parseInt((event.target as HTMLInputElement).value, 10),
            )}
          />
        </FormRow>
        <FormRow>
          <FormNumber
            label="r"
            min={-10000}
            max={10000}
            step={1}
            value={(attributes as RadialGradientAttributes).r}
            onChange={(event: React.ChangeEvent) => onAttributeChange(
              event,
              'r',
              parseInt((event.target as HTMLInputElement).value, 10),
            )}
          />
        </FormRow>
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
