import * as React from 'react';
import nanoid from 'nanoid';
import { FormButton } from './components/FormButton';
import { FormRow } from './layout';
import { GradientColor } from './GradientColor';
import { InputColor } from '../../../../../store/editor/_gradientTypes';
import { AddColorPayload } from '../../../../../store/editor/settings/types';

export type GradientColorsProps = {
  addColor: (payload: AddColorPayload) => void,
  colors: InputColor[],
  gradientId: string,
};

export const GradientColors = (props: GradientColorsProps) => {
  const { addColor, colors, gradientId } = props;
  const [ defaultColor ] = React.useState([232, 123, 85]);

  const renderColors = () => colors
    .map((color: InputColor) => (
      <FormRow>
        <GradientColor
          key={color.id}
          color={color}
          onDelete={(id: string) => {}}
        />
      </FormRow>
    ));

  return (
    <React.Fragment>
      <FormRow>
        <FormButton
          text="Add Color"
          onClick={() => addColor({
            id: gradientId,
            color: {
              id: nanoid(),
              color: defaultColor,
            },
          })}
        >
          Add Colors
        </FormButton>
      </FormRow>
      {renderColors()}
    </React.Fragment>
  );
};