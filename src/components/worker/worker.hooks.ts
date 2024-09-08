import { useCallback, useEffect } from "react";
import GradientWorker from "./gradient.worker?worker";
import { atom, useAtom, useAtomValue } from "jotai";
import {
  AppColor,
  GradientWorkerInput,
  GradientWorkerOutput,
} from "@/state/types";

export type GradientWorkerState =
  | { type: "idle" }
  | { type: "loading" }
  | {
      type: "initialized";
      worker: Worker;
    };

export const gradientWorkerStateAtom = atom<Worker | null>(null);

export const useGradientWorker = (
  callback: (output: GradientWorkerOutput) => void
) => {
  const worker = useAtomValue(gradientWorkerStateAtom);

  const postMessage = useCallback(
    (input: GradientWorkerInput) => {
      if (worker) {
        worker.postMessage(input);
      } else {
        console.error("Worker not initialized");
      }
    },
    [worker]
  );

  useEffect(() => {
    if (worker) {
      worker.onmessage = (
        event: MessageEvent<{ id: string; colors: AppColor[] }>
      ) => {
        callback(event.data);
      };
    }
    return () => {
      if (worker) {
        worker.onmessage = null;
      }
    };
  }, [worker, callback]);

  return { postMessage } as const;
};

export const useGradientWorkerInit = () => {
  const [workerState, setWorkerState] = useAtom(gradientWorkerStateAtom);

  const loadWorker = useCallback(() => {
    setWorkerState(new GradientWorker({ name: "gradientWorker" }));
  }, [setWorkerState]);

  useEffect(() => {
    loadWorker();

    return () => {
      workerState?.terminate();
      setWorkerState(null);
    };
  }, [setWorkerState]);

  return workerState !== null;
};
