import { match, P } from "ts-pattern";
import { BlendMode, ColorSpace, Gradient, InputColor, Preset } from "./types";
import {
  createContext,
  Dispatch,
  FC,
  PropsWithChildren,
  useContext,
  useReducer,
} from "react";
import { deletePreset, loadPresets, savePreset } from "@/lib/preset";

export type State = {
  globalBlendMode: BlendMode;
  gradients: Gradient[];
  presets: Preset[];
  selectedPreset: string | null;
};

export type Action =
  | { type: "ADD_GRADIENT"; payload: Gradient }
  | { type: "DELETE_GRADIENT"; payload: { id: string } }
  | { type: "DELETE_ALL_GRADIENTS" }
  | { type: "ADD_COLOR"; payload: { color: InputColor; gradientId: string } }
  | { type: "UPDATE_COLOR"; payload: { color: InputColor; gradientId: string } }
  | { type: "DELETE_COLOR"; payload: { colorId: string; gradientId: string } }
  | { type: "DELETE_ALL_COLORS"; payload: { gradientId: string } }
  | { type: "SET_GLOBAL_BLEND_MODE"; payload: { blendMode: BlendMode } }
  | { type: "ADD_PRESET"; payload: Preset }
  | { type: "DELETE_PRESET"; payload: { id: string } }
  | { type: "SELECT_PRESET"; payload: { id: string | null } };

const initialState: State = {
  globalBlendMode: "normal",
  gradients: [],
  presets: loadPresets(),
  selectedPreset: null,
};

const reducer = (state: State = initialState, action: Action): State =>
  match<[State, Action]>([state, action])
    .with([P._, { type: "SET_GLOBAL_BLEND_MODE" }], ([state, action]) => ({
      ...state,
      globalBlendMode: action.payload.blendMode,
    }))
    .with([P._, { type: "ADD_GRADIENT" }], ([state, action]) => ({
      ...state,
      gradients: [...state.gradients, action.payload],
    }))
    .with([P._, { type: "DELETE_GRADIENT" }], ([state, action]) => ({
      ...state,
      gradients: state.gradients.filter(
        (gradient) => gradient.id !== action.payload.id
      ),
    }))
    .with([P._, { type: "DELETE_ALL_GRADIENTS" }], ([state]) => ({
      ...state,
      gradients: [],
    }))
    .with([P._, { type: "ADD_PRESET" }], ([state, action]) => {
      savePreset(action.payload);
      return {
        ...state,
        presets: loadPresets(),
      };
    })
    .with([P._, { type: "DELETE_PRESET" }], ([state, action]) => {
      deletePreset(action.payload.id);
      return {
        ...state,
        presets: loadPresets(),
      };
    })
    .with([P._, { type: "SELECT_PRESET" }], ([state, action]) => ({
      ...state,
      selectedPreset: action.payload.id,
    }))
    .with([P._, { type: "ADD_COLOR" }], ([state, action]) => ({
      ...state,
      gradients: state.gradients.map((gradient) => {
        if (gradient.id === action.payload.gradientId) {
          return {
            ...gradient,
            colors: [...gradient.colors, action.payload.color],
          };
        }
        return gradient;
      }),
    }))
    .with([P._, { type: "UPDATE_COLOR" }], ([state, action]) => ({
      ...state,
      gradients: state.gradients.map((gradient) => {
        if (gradient.id === action.payload.gradientId) {
          gradient.colors = gradient.colors.map((color) => {
            if (color.id === action.payload.color.id) {
              return {
                id: color.id,
                color: action.payload.color.color,
              };
            }
            return color;
          });
          return gradient;
        }
        return gradient;
      }),
    }))
    .with([P._, { type: "DELETE_COLOR" }], ([state, action]) => ({
      ...state,
      gradients: state.gradients.map((gradient) => {
        if (gradient.id === action.payload.gradientId) {
          gradient.colors = gradient.colors.filter(
            (color) => color.id !== action.payload.colorId
          );
          return gradient;
        }
        return gradient;
      }),
    }))
    .with([P._, { type: "DELETE_ALL_COLORS" }], ([state, action]) => ({
      ...state,
      gradients: state.gradients.map((gradient) => {
        if (gradient.id === action.payload.gradientId) {
          return {
            ...gradient,
            colors: [],
          };
        }
        return gradient;
      }),
    }))
    .otherwise(() => state);

const ListContext = createContext<{ state: State; dispatch: Dispatch<Action> }>(
  { state: initialState, dispatch: (_: Action) => {} }
);

const ListContextProvider: FC<PropsWithChildren> = ({ children }) => {
  const [state, send] = useReducer(reducer, initialState);
  return (
    <ListContext.Provider value={{ state, dispatch: send }}>
      {children}
    </ListContext.Provider>
  );
};

export const useListContext = () => useContext(ListContext);

export default ListContextProvider;
