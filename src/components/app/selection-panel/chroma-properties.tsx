import {
  gradientStateReducerAtom,
  selectedGradientAtom,
} from "@/state/gradient.store";
import { GradientInterpolationMode, INTERPOLATION_MODES } from "@/state/types";
import CheckboxRow from "@/components/app/checkbox-row";
import SliderRow from "@/components/app/slider-row";
import SelectRow from "@/components/app/select-row";
import { useAtomValue, useSetAtom } from "jotai";
import OutputSpectrum from "./output-spectrum";
import { InterpolationMode } from "chroma-js";
import { FC } from "react";

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
          <OutputSpectrum colors={gradient.output} />
          <SliderRow
            title="Alpha"
            min={0.01}
            max={1.0}
            step={0.01}
            value={[gradient.chromaAttributes.alpha]}
            onValueChange={(values) => {
              dispatch({
                type: "SET_CHROMA_ATTRS",
                payload: {
                  gradientId: gradient.id,
                  attrs: {
                    ...gradient.chromaAttributes,
                    alpha: values[0],
                  },
                },
              });
            }}
          />
          <SelectRow<GradientInterpolationMode>
            label="Interpolation"
            options={[
              { id: "linear", value: "linear", label: "linear"},
              { id: "bezier", value: "bezier", label: "bezier"},
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
                label: mode
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
