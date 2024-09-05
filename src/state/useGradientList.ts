import { useAtom } from "jotai";
import { gradientIdsAtom, selectedGradientIdAtom } from "./gradients.state";
import { useCallback } from "react";
import { nanoid } from "nanoid";

export const useGradientList = () => {
  const [ids, setGradientIds] = useAtom(gradientIdsAtom);
  const [selectedGradientId, setSelectedId] = useAtom(selectedGradientIdAtom);

  const addGradient = useCallback(() => {
    setGradientIds((prev) => [...prev, nanoid()]);
  }, [setGradientIds]);

  const deleteGradient = useCallback(
    (id: string) => {
      setGradientIds((prev) => prev.filter((value) => value !== id));
      if (id === selectedGradientId) {
        setSelectedId(undefined);
      }
    },
    [setGradientIds, selectedGradientId]
  );

  const deleteAllGradients = useCallback(() => {
    setGradientIds([]);
    setSelectedId(undefined);
  }, [setGradientIds, setSelectedId]);

  return {
    gradientIds: ids,
    addGradient,
    deleteGradient,
    deleteAllGradients,
  } as const;
};
