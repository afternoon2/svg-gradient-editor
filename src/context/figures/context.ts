import { FiguresContextValue } from "./interfaces";
import { createContext } from "react";

const FiguresContext = createContext<FiguresContextValue>({
  state: {},
  dispatch: () => null,
});

export default FiguresContext;
