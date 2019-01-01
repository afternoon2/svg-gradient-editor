import * as React from 'react';
import nanoid from 'nanoid';
import { FormButton } from './components/FormButton';
import { FormRow } from './layout';
import { GradientColor } from './GradientColor';
import { InputColor } from '../../../../../store/editor/_gradientTypes';
import { AddColorPayload, DeleteColorPayload } from '../../../../../store/editor/settings/types';

export type GradientColorsProps = {
  addColor: (payload: AddColorPayload) => void,
  deleteColor: (payload: DeleteColorPayload) => void,
  colors: InputColor[],
  gradientId: string,
};

export const GradientColors = (props: GradientColorsProps) => {
  const { addColor, deleteColor, colors, gradientId } = props;

  const renderColors = () => colors
    .map((color: InputColor) => (
      <FormRow key={color.id}>
        <GradientColor
          color={color}
          onDelete={() => deleteColor({
            gradientId,
            colorId: color.id,
          })}
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
              color: [
                Math.floor(Math.random() * 255),
                Math.floor(Math.random() * 255),
                Math.floor(Math.random() * 255),
              ],
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