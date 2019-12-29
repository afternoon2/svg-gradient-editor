import { FigureBarAction, FigureBarState, FigureShape, FigureRegistry } from './interfaces';
import { figureBarInitialState } from './context';

const figureBarReducer = (state: FigureBarState, { type, payload }: FigureBarAction): FigureBarState => {
  switch (type) {
    case 'SET_SHAPE':
      return {
        ...state,
        shape: payload as FigureShape,
      };
    case 'SET_FIGURES':
      return {
        ...state,
        figures: payload as FigureRegistry,
      };
    default:
      return figureBarInitialState;
  }
};

export default figureBarReducer;
