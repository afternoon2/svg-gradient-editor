import {
  gradientStateReducerAtom,
  selectedGradientAtom,
} from "@/state/gradient.store";
import { useAtomValue, useSetAtom } from "jotai";
import { FC } from "react";
import ChromaSwitch from "./chroma-switch";
import SliderRow from "@/components/app/slider-row";

const ChromaProperties: FC = () => {
  const dispatch = useSetAtom(gradientStateReducerAtom);
  const gradient = useAtomValue(selectedGradientAtom);

  if (!gradient) return null;

  return (
    <>
      <ChromaSwitch
        value={gradient.useChroma}
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
        </>
      )}
    </>
  );
};

export default ChromaProperties;
