import { Dispatch, createContext } from 'react';
import { SvgProps, SvgAction } from '../interfaces';

export const initialSizingsState: SvgProps = {
  x: 0,
  y: 0,
  width: 800,
  height: 600,
};

export interface SizingsContextValue {
  state: SvgProps;
  dispatch: Dispatch<SvgAction<'SET_SIZINGS_PROP'>>;
}

const SizingsContext = createContext<SizingsContextValue>({
  state: initialSizingsState,
  dispatch: () => null,
});

export default SizingsContext;
