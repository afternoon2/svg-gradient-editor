import { match, P } from "ts-pattern";
import { BlendMode, Gradient, Preset } from "./types";
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
