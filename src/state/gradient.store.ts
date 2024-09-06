import { match } from "ts-pattern";

import {
  AppColor,
  BlendMode,
  ChromaAttributes,
  GradientType,
  LinearGradientAttributes,
  RadialGradientAttributes,
} from "./types";
import { atomWithReducer, selectAtom } from "jotai/utils";
import { nanoid } from "nanoid";
import chroma from "chroma-js";

export const randomColor = (): AppColor => ({
  id: nanoid(),
  value: chroma.random().alpha(0.5).rgba(),
});

export const randomGradient = (id?: string): Gradient => ({
  id: id ?? nanoid(),
  type: "linear",
  alias: null,
  useChroma: false,
  chromaAttributes: {
    lightnessCorrection: false,
    colorSpace: "rgb",
    samples: 10,
    interpolation: "linear",
  },
  linearAttributes: {
    x1: 0,
    y1: 0,
    x2: 1,
    y2: 0,
  },
  radialAttributes: {
    cx: 0.5,
    cy: 0.5,
    r: 1,
    fx: 0,
    fy: 0,
    withFocalPoints: false,
    spreadMethod: "pad",
  },
  blendMode: "normal",
  input: [randomColor(), randomColor()],
  output: [],
});

export type Gradient = {
  id: string;
  alias: string | null;
  useChroma: boolean;
  chromaAttributes: ChromaAttributes;
  input: AppColor[];
  output: AppColor[];
  blendMode: BlendMode;
  type: GradientType;
  linearAttributes: LinearGradientAttributes;
  radialAttributes: RadialGradientAttributes;
};

export type GradientState = {
  selectedGradientId: string | null;
  gradients: Gradient[];
};

const initialState: GradientState = {
  selectedGradientId: null,
  gradients: [],
};

export type GradientAction =
  | { type: "ADD_GRADIENT"; payload: { gradient: Gradient } }
  | { type: "REMOVE_GRADIENT"; payload: { id: string } }
  | { type: "REMOVE_ALL_GRADIENTS" }
  | { type: "SELECT_GRADIENT"; payload: { id: string | null } }
  | { type: "SET_GRADIENT_TYPE"; payload: { id: string; type: GradientType } }
  | {
      type: "SET_LINEAR_GRADIENT_ATTRS";
      payload: { id: string; attrs: LinearGradientAttributes };
    }
  | {
      type: "SET_RADIAL_GRADIENT_ATTRS";
      payload: { id: string; attrs: RadialGradientAttributes };
    }
  | {
      type: "SET_BLEND_MODE";
      payload: { id: string; blendMode: BlendMode };
    }
  | {
      type: "SET_CHROMA_USAGE";
      payload: { id: string; useChroma: boolean };
    }
  | {
      type: "SET_COLOR";
      payload: { gradientId: string; color: AppColor };
    }
  | {
      type: "ADD_COLOR";
      payload: { gradientId: string; color: AppColor };
    }
  | {
      type: "REMOVE_COLOR";
      payload: { gradientId: string; colorId: string };
    }
  | { type: "REMOVE_ALL_COLORS"; payload: { gradientId: string } }
  | {
      type: "SET_OUTPUT_COLORS";
      payload: { gradientId: string; outputColors: AppColor[] };
    }
  | {
      type: "SET_ALIAS";
      payload: {
        gradientId: string;
        alias: string | null;
      };
    };

const gradientReducer = (
  state: GradientState,
  action: GradientAction
): GradientState =>
  match<GradientAction>(action)
    .with({ type: "ADD_GRADIENT" }, (action) => ({
      selectedGradientId: action.payload.gradient.id,
      gradients: [...state.gradients, action.payload.gradient],
    }))
    .with({ type: "REMOVE_GRADIENT" }, (action) => ({
      ...state,
      gradients: state.gradients.filter((g) => g.id !== action.payload.id),
    }))
    .with({ type: "REMOVE_ALL_GRADIENTS" }, () => ({
      ...state,
      gradients: [],
      selectedGradientId: null,
    }))
    .with({ type: "SELECT_GRADIENT" }, (action) => ({
      ...state,
      selectedGradientId: action.payload.id,
    }))
    .with({ type: "SET_GRADIENT_TYPE" }, (action) => ({
      ...state,
      gradients: state.gradients.map((g) => {
        if (g.id === action.payload.id) {
          return {
            ...g,
            type: action.payload.type,
          };
        }
        return g;
      }),
    }))
    .with({ type: "SET_LINEAR_GRADIENT_ATTRS" }, (action) => ({
      ...state,
      gradients: state.gradients.map((g) => {
        if (g.id === action.payload.id) {
          return {
            ...g,
            linearAttributes: action.payload.attrs,
          };
        }
        return g;
      }),
    }))
    .with({ type: "SET_RADIAL_GRADIENT_ATTRS" }, (action) => ({
      ...state,
      gradients: state.gradients.map((g) => {
        if (g.id === action.payload.id) {
          return {
            ...g,
            radialAttributes: action.payload.attrs,
          };
        }
        return g;
      }),
    }))
    .with({ type: "SET_BLEND_MODE" }, (action) => ({
      ...state,
      gradients: state.gradients.map((g) => {
        if (g.id === action.payload.id) {
          return {
            ...g,
            blendMode: action.payload.blendMode,
          };
        }
        return g;
      }),
    }))
    .with({ type: "SET_CHROMA_USAGE" }, (action) => ({
      ...state,
      gradients: state.gradients.map((g) => {
        if (g.id === action.payload.id) {
          return {
            ...g,
            useChroma: action.payload.useChroma,
          };
        }
        return g;
      }),
    }))
    .with({ type: "ADD_COLOR" }, (action) => ({
      ...state,
      gradients: state.gradients.map((g) => {
        if (g.id === action.payload.gradientId) {
          return {
            ...g,
            input: [...g.input, action.payload.color],
          };
        }
        return g;
      }),
    }))
    .with({ type: "SET_COLOR" }, (action) => ({
      ...state,
      gradients: state.gradients.map((g) => {
        if (g.id === action.payload.gradientId) {
          return {
            ...g,
            input: g.input.map((color) => {
              if (color.id === action.payload.color.id) {
                return {
                  ...color,
                  ...action.payload.color,
                };
              }
              return color;
            }),
          };
        }
        return g;
      }),
    }))
    .with({ type: "REMOVE_COLOR" }, (action) => ({
      ...state,
      gradients: state.gradients.map((g) => {
        if (g.id === action.payload.gradientId) {
          return {
            ...g,
            input: g.input.filter(
              (color) => color.id !== action.payload.colorId
            ),
          };
        }
        return g;
      }),
    }))
    .with({ type: "REMOVE_ALL_COLORS" }, (action) => ({
      ...state,
      gradients: state.gradients.map((g) => {
        if (g.id === action.payload.gradientId) {
          return {
            ...g,
            useChroma: false,
            input: [],
            output: [],
          };
        }
        return g;
      }),
    }))
    .with({ type: "SET_OUTPUT_COLORS" }, (action) => ({
      ...state,
      gradients: state.gradients.map((g) => {
        if (g.id === action.payload.gradientId) {
          return {
            ...g,
            output: action.payload.outputColors,
          };
        }
        return g;
      }),
    }))
    .with({ type: "SET_ALIAS" }, (action) => ({
      ...state,
      gradients: state.gradients.map((g) => {
        if (g.id === action.payload.gradientId) {
          return {
            ...g,
            alias: action.payload.alias,
          };
        }
        return g;
      }),
    }))
    .otherwise(() => state);

export const gradientStateReducerAtom = atomWithReducer(
  initialState,
  gradientReducer
);

export const selectedGradientIdAtom = selectAtom(
  gradientStateReducerAtom,
  (state) => state.selectedGradientId
);

export const selectedGradientAtom = selectAtom(
  gradientStateReducerAtom,
  (state) =>
    state.selectedGradientId
      ? (state.gradients.find(
          (g) => g.id === state.selectedGradientId
        ) as Gradient) ?? null
      : null
);
