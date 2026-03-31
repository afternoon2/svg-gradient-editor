import { atom } from "jotai";

export const artboardSizeAtom = atom<[number, number]>([800, 800]);

export const artboardPresentAtom = atom(false);

export const artboardBgColorAtom = atom({ r: 255, g: 255, b: 255, a: 1 });
