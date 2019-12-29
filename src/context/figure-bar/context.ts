import { FigureBarContextValue, FigureBarState } from './interfaces';
import { createContext } from 'react';

export const figureBarInitialState: FigureBarState = {
  shape: 'rect',
  figures: {},
};

export default createContext<FigureBarContextValue>({
  state: figureBarInitialState,
  dispatch: () => null,
});
