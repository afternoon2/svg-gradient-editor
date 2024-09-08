import { atom } from "jotai";
import { ColorSpace } from "./types";

export const globalColorSpaceAtom = atom<ColorSpace>("rgba");
