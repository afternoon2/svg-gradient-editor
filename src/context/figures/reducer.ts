import { FiguresState, FiguresAction, Figure, FigureMovePayload } from "./interfaces";
import * as mutations from './mutations';

export const figuresInitialState: FiguresState = {};

const figuresReducer = (state: FiguresState, { type, payload }: FiguresAction): FiguresState => {
  switch (type) {
    case 'ADD_FIGURE':
      return mutations.addFigure(state, payload as Figure);
    case 'REMOVE_FIGURE':
      return mutations.removeFigure(state, payload as string);
    case 'MOVE_FIGURE':
      return mutations.moveFigure(state, payload as FigureMovePayload);
    default:
      return figuresInitialState;
  }
};

export default figuresReducer;
