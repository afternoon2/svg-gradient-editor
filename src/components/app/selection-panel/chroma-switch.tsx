import { FC, useCallback } from "react";
import { useAtomValue, useSetAtom } from "jotai";
import {
  gradientStateReducerAtom,
  selectedGradientAtom,
} from "@/state/gradient.store";
import { useGradientWorker } from "@/components/worker/worker.hooks";
import { GradientWorkerOutput } from "@/state/types";
import CheckboxRow from "../checkbox-row";

const ChromaSwitch: FC<{
  value: boolean;
  onChange: (value: boolean) => void;
}> = ({ value, onChange }) => {
  const gradient = useAtomValue(selectedGradientAtom);
  const dispatch = useSetAtom(gradientStateReducerAtom);

  const onMessage = useCallback(
    (output: GradientWorkerOutput) => {
      console.log(output);
      dispatch({
        type: "SET_OUTPUT_COLORS",
        payload: {
          gradientId: output.id,
          outputColors: output.colors,
        },
      });
    },
    [dispatch]
  );

  const { postMessage } = useGradientWorker(onMessage);

  const handleChange = useCallback(
    (checked: boolean) => {
      onChange(checked);
      if (checked && gradient) {
        postMessage({
          id: gradient.id,
          colors: gradient.input,
          chromaAttributes: gradient.chromaAttributes,
        });
      }
    },
    [gradient]
  );

  return (
    <CheckboxRow
      label="Use chroma"
      checked={value}
      onChange={handleChange}
      id={`${gradient?.id}-chroma`}
    />
  );
};

export default ChromaSwitch;
