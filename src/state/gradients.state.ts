import { atom, useAtom } from "jotai";
import { atomFamily } from "jotai/utils";
import { createEmptyGradientObject } from "../lib/gradient";
import { useCallback } from "react";
import { nanoid } from "nanoid";

export const gradientIdsAtom = atom<string[]>([]);

const gradientListFamily = atomFamily(
  (id: string) => atom(createEmptyGradientObject(id)),
  (a, b) => a === b
);

export const useGradientList = () => {
  const [ids, setIds] = useAtom(gradientIdsAtom);

  const addGradient = useCallback(() => {
    const id = nanoid();
    gradientListFamily(id);
    setIds((prev) => [...prev, id]);
  }, [setIds]);

  const deleteGradient = useCallback(
    (id: string) => {
      setIds((prev) => prev.filter((value) => value !== id));
      gradientListFamily.remove(id);
    },
    [setIds]
  );

  const deleteAllGradients = useCallback(() => {
    ids.forEach((id) => gradientListFamily.remove(id));
    setIds([]);
  }, [setIds]);

  return {
    gradientIds: ids,
    addGradient,
    deleteGradient,
    deleteAllGradients,
  } as const;
};

export const useSingleGradient = (id: string) =>
  useAtom(gradientListFamily(id));
