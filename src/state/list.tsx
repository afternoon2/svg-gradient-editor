import { match, P } from "ts-pattern";
import { BlendMode, Gradient } from "./types";
import {
  createContext,
  Dispatch,
  FC,
  PropsWithChildren,
  useContext,
  useReducer,
} from "react";

export type State = {
  globalBlendMode: BlendMode;
  gradients: Gradient[];
};

export type Action =
  | { type: "ADD_GRADIENT"; payload: Gradient }
  | { type: "DELETE_GRADIENT"; payload: { id: string } }
  | { type: "SET_GLOBAL_BLEND_MODE"; payload: { blendMode: BlendMode } };

const initialState: State = {
  globalBlendMode: "normal",
  gradients: [],
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
