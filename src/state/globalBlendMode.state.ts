import { BlendMode } from "./types";
import { atom } from "jotai";

export const globalBlendModeAtom = atom<BlendMode>("normal");
