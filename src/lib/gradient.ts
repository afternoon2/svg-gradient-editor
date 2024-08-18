import { Gradient } from "@/state/types";
import { nanoid } from "nanoid";

export const createEmptyGradientObject = (): Gradient => ({
  id: nanoid(16),
  type: "linear",
  colors: [],
  output: [],
  attributes: {
    x1: 0,
    y1: 0,
    x2: 100,
    y2: 100,
  },
  blendMode: {
    id: nanoid(16),
    mode: "normal",
  },
});
