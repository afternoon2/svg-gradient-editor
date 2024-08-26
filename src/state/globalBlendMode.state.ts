import { atom } from "jotai";
import { BlendMode } from "./types";

export const globalBlendModeAtom = atom<BlendMode>("normal");
