import { atom } from "jotai";
import { atomFamily } from "jotai/utils";
import {
  BlendMode,
  ChromaAttributes,
  Gradient,
  LinearGradientAttributes,
  RadialGradientAttributes,
} from "./types";
import { randomChromaColor } from "@/lib/gradient";

type FamilyValueOf<T extends Record<string, unknown>> = { id: string } & T;

export const gradientIdsAtom = atom<string[]>([]);

export const gradientTypeAtomFamily = atomFamily((id: string) =>
  atom<FamilyValueOf<{ type: Gradient["type"] }>>({ id, type: "linear" })
);

export const gradientAliasFamily = atomFamily((id: string) =>
  atom<FamilyValueOf<{ alias?: string }>>({ id })
);

export const linearGradientAttributesFamily = atomFamily((id: string) =>
  atom<FamilyValueOf<{ attrs: LinearGradientAttributes }>>({
    id,
    attrs: { x1: 0, y1: 0, x2: 1, y2: 0 },
  })
);

export const radialGradientAttributesFamily = atomFamily((id: string) =>
  atom<FamilyValueOf<{ attrs: RadialGradientAttributes }>>({
    id,
    attrs: {
      cx: 0.5,
      cy: 0.5,
      r: 1,
      fx: 0,
      fy: 0,
      withFocalPoints: false,
    },
  })
);

export const gradientColorIdsFamily = atomFamily((id: string) =>
  atom<FamilyValueOf<{ colorIds: string[] }>>({ id, colorIds: [] })
);

export const chromaUsageFamily = atomFamily((id: string) =>
  atom<FamilyValueOf<{ value: boolean }>>({ id, value: false })
);

export const chromaAttributesFamily = atomFamily((id: string) =>
  atom<FamilyValueOf<{ attributes: ChromaAttributes }>>({
    id,
    attributes: {
      lightnessCorrection: false,
      colorSpace: "rgb",
      samples: 10,
      interpolation: "linear",
    },
  })
);

export const gradientBlendModeFamily = atomFamily((id: string) =>
  atom<FamilyValueOf<{ blendMode: BlendMode }>>({ id, blendMode: "normal" })
);

export const gradientColorFamily = atomFamily((colorId: string) =>
  atom<FamilyValueOf<{ color: [number, number, number, number] }>>({
    id: colorId,
    color: randomChromaColor(),
  })
);
