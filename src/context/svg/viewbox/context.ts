import { Dispatch, createContext } from "react";
import { SvgProps, SvgAction } from "../interfaces";

export const initialViewBoxState: SvgProps = {
  x: 0,
  y: 0,
  width: 800,
  height: 600,
};

export interface ViewBoxContextValue {
  state: SvgProps;
  dispatch: Dispatch<SvgAction<'SET_VIEW_BOX_PROP'>>;
}

const ViewBoxContext = createContext<ViewBoxContextValue>({
  state: initialViewBoxState,
  dispatch: () => null,
});

export default ViewBoxContext;