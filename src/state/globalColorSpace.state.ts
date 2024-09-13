import { ColorSpace } from "./types";
import { atom } from "jotai";

export const globalColorSpaceAtom = atom<ColorSpace>("rgba");
