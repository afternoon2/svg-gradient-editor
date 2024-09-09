import {
  gradientStateReducerAtom,
  selectedGradientAtom,
} from "@/state/gradient.store";
import { useGradientWorker } from "@/components/worker/worker.hooks";
import { Gradient, GradientWorkerOutput } from "@/state/types";
import { FC, useCallback, useEffect } from "react";
import { useAtomValue, useSetAtom } from "jotai";

const ChromaListener: FC = () => {
  const dispatch = useSetAtom(gradientStateReducerAtom);
  const gradient = useAtomValue(selectedGradientAtom) as Gradient;

  const {
    id,
    useChroma,
    input,
    chromaAttributes: {
      interpolation,
      colorSpace,
      lightnessCorrection,
      samples,
    },
  } = gradient;

  const onMessage = useCallback(
    (output: GradientWorkerOutput) => {
      dispatch({
        type: "SET_OUTPUT_COLORS",
        payload: {
          gradientId: output.id,
          outputColors: output.colors,
        },
      });
    },
    [dispatch],
  );

  const { postMessage } = useGradientWorker(onMessage);

  useEffect(() => {
    if (useChroma === true) {
      postMessage({
        id,
        colors: input,
        chromaAttributes: {
          interpolation,
          colorSpace,
          lightnessCorrection,
          samples,
        },
      });
    }
  }, [
    useChroma,
    input,
    interpolation,
    colorSpace,
    lightnessCorrection,
    samples,
  ]);

  return null;
};

export default ChromaListener;
