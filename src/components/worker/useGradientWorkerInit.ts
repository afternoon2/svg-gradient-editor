import { useCallback, useEffect } from "react";
import GradientWorker from "./gradient.worker?worker";
import { atom, useAtom } from "jotai";

export type GradientWorkerState =
  | { type: "idle" }
  | { type: "loading" }
  | {
      type: "initialized";
      worker: Worker;
    };

export const gradientWorkerStateAtom = atom<Worker | null>(null);

export const useGradientWorkerInit = () => {
  const [workerState, setWorkerState] = useAtom(gradientWorkerStateAtom);

  const loadWorker = useCallback(() => {
    setWorkerState(new GradientWorker({ name: "gradientWorker" }));
  }, [setWorkerState]);

  useEffect(() => {
    loadWorker();

    return () => {
      setWorkerState(null);
    };
  }, [setWorkerState]);

  return workerState !== null;
};
