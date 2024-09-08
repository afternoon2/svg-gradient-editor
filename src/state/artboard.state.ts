import { atom } from "jotai";

export const artboardSizeAtom = atom<[number, number]>([800, 800]);

export const artboardPresentAtom = atom(false);
