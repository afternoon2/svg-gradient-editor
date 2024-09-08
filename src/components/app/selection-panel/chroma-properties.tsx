import {
  gradientStateReducerAtom,
  selectedGradientAtom,
} from "@/state/gradient.store";
import { useAtomValue, useSetAtom } from "jotai";
import { FC } from "react";
import SliderRow from "@/components/app/slider-row";
import SelectRow from "@/components/app/select-row";
import { GradientInterpolationMode, INTERPOLATION_MODES } from "@/state/types";
import CheckboxRow from "../checkbox-row";
import { InterpolationMode } from "chroma-js";

const ChromaProperties: FC = () => {
  const dispatch = useSetAtom(gradientStateReducerAtom);
  const gradient = useAtomValue(selectedGradientAtom);

  if (!gradient) return null;

  return (
    <>
      <CheckboxRow
        label="Use chroma.js"
        checked={gradient.useChroma}
        onChange={(value) => {
          dispatch({
            type: "SET_CHROMA_USAGE",
            payload: {
              id: gradient.id,
              useChroma: value,
            },
          });
        }}
      />
      {gradient.useChroma && (
        <>
          <SliderRow
            title="Samples"
            min={5}
            max={100}
            step={1}
            value={[gradient.chromaAttributes.samples]}
            onValueChange={(values) => {
              dispatch({
                type: "SET_CHROMA_ATTRS",
                payload: {
                  gradientId: gradient.id,
                  attrs: {
                    ...gradient.chromaAttributes,
                    samples: values[0],
                  },
                },
              });
            }}
          />
          <SelectRow<GradientInterpolationMode>
            label="Interpolation"
            options={[
              { id: "linear", value: "linear" },
              { id: "bezier", value: "bezier" },
            ]}
            value={gradient.chromaAttributes.interpolation}
            onValueChange={(value) => {
              dispatch({
                type: "SET_CHROMA_ATTRS",
                payload: {
                  gradientId: gradient.id,
                  attrs: {
                    ...gradient.chromaAttributes,
                    interpolation: value as GradientInterpolationMode,
                  },
                },
              });
            }}
          />
          {gradient.chromaAttributes.interpolation === "linear" && (
            <SelectRow<InterpolationMode>
              label="Mode"
              value={gradient.chromaAttributes.colorSpace}
              onValueChange={(value) => {
                dispatch({
                  type: "SET_CHROMA_ATTRS",
                  payload: {
                    gradientId: gradient.id,
                    attrs: {
                      ...gradient.chromaAttributes,
                      colorSpace: value as InterpolationMode,
                    },
                  },
                });
              }}
              options={INTERPOLATION_MODES.map((mode) => ({
                id: mode,
                value: mode,
              }))}
            />
          )}
          <CheckboxRow
            label="Lightness corection"
            checked={gradient.chromaAttributes.lightnessCorrection}
            onChange={(value) => {
              dispatch({
                type: "SET_CHROMA_ATTRS",
                payload: {
                  gradientId: gradient.id,
                  attrs: {
                    ...gradient.chromaAttributes,
                    lightnessCorrection: value,
                  },
                },
              });
            }}
          />
        </>
      )}
    </>
  );
};

export default ChromaProperties;
