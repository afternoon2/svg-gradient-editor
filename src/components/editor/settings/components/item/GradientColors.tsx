import * as React from 'react';
import nanoid from 'nanoid';
import { FormButton } from './components/FormButton';
import { FormSwitch } from './components/FormSwitch';
import { FormRow } from './layout';
import { GradientColor } from './GradientColor';
import { InputColor } from '../../../../../store/editor/_gradientTypes';
import { AddColorPayload, DeleteColorPayload, ChromaJsTogglePayload } from '../../../../../store/editor/settings/types';

export type GradientColorsProps = {
  addColor: (payload: AddColorPayload) => void,
  deleteColor: (payload: DeleteColorPayload) => void,
  editColor: (payload: AddColorPayload) => void,
  deleteAllColors: () => void,
  colors: InputColor[],
  gradientId: string,
  useChroma: boolean,
  onChromaJsToggle: (payload: ChromaJsTogglePayload) => void,
};

export const GradientColors = (props: GradientColorsProps) => {
  const {
    addColor, 
    deleteColor, 
    colors, 
    gradientId,
    useChroma,
    onChromaJsToggle,
    editColor,
    deleteAllColors,
  } = props;

  const renderColors = () => colors
    .map((color: InputColor) => (
      <FormRow key={color.id}>
        <GradientColor
          color={color}
          onDelete={() => deleteColor({
            gradientId,
            colorId: color.id,
          })}
          onEdit={(color: InputColor) => editColor({
            id: gradientId,
            color,
          })}
        />
      </FormRow>
    ));

  return (
    <React.Fragment>
      <FormRow>
        <FormButton
          style={{ marginRight: '1em' }}
          onClick={() => addColor({
            id: gradientId,
            color: {
              id: nanoid(),
              color: [
                Math.floor(Math.random() * 255),
                Math.floor(Math.random() * 255),
                Math.floor(Math.random() * 255),
                0.5,
              ],
            },
          })}
        >
          Add Color
        </FormButton>
        <FormButton
          disabled={colors.length === 0}
          level="danger"
          onClick={deleteAllColors}
        >
          Remove All
        </FormButton>
        {/*<FormSwitch
          label="Use chroma.js"
          checked={useChroma}
          disabled={colors.length < 2}
          onChange={(useChroma: boolean) => onChromaJsToggle({
            id: gradientId,
            useChroma,
          })}
        />*/}
      </FormRow>
      {renderColors()}
    </React.Fragment>
  );
};