import { FC, useCallback } from "react";
import SwitchRow from "../switch-row";
import { useAtomValue, useSetAtom } from "jotai";
import {
  gradientStateReducerAtom,
  selectedGradientAtom,
} from "@/state/gradient.store";
import { useGradientWorker } from "@/components/worker/worker.hooks";
import { GradientWorkerOutput } from "@/state/types";

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
    <SwitchRow label="Use chroma" checked={value} onChange={handleChange} />
  );
};

export default ChromaSwitch;
