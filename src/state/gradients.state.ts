import { atom } from "jotai";
import { atomFamily } from "jotai/utils";
import {
  AppColor,
  BlendMode,
  ChromaAttributes,
  GradientType,
  LinearGradientAttributes,
  RadialGradientAttributes,
} from "./types";
import { randomChromaColor } from "@/lib/gradient";
import { nanoid } from "nanoid";

type FamilyValueOf<T extends Record<string, unknown>> = {
  id: string;
} & T;

export const gradientIdsAtom = atom<string[]>([]);

export const selectedGradientIdAtom = atom<string | undefined>();

export const gradientTypeAtomFamily = atomFamily((id: string) =>
  atom<FamilyValueOf<{ type: GradientType }>>({
    id,
    type: "linear",
  })
);

export const gradientAliasFamily = atomFamily((id: string) =>
  atom<FamilyValueOf<{ alias?: string }>>({
    id,
    alias: undefined,
  })
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
  atom<FamilyValueOf<{ colorIds: string[] }>>({
    id,
    colorIds: [nanoid(), nanoid()],
  })
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
  atom<FamilyValueOf<AppColor>>({
    id: colorId,
    value: randomChromaColor(),
  })
);
