import update from 'immutability-helper';
import { FiguresState, Figure, FigureMovePayload } from './interfaces';
import moveInArray from 'utils/moveInArray';

export const addFigure = (state: FiguresState, payload: Figure): FiguresState =>
  update(state, {
    figures: {
      [payload.id]: payload,
    },
  });

export const removeFigure = (state: FiguresState, payload: string): FiguresState =>
  update(state, {
    figures: Object
      .fromEntries(
        Object.entries(state.figures)
          .filter((item: [string, Figure]) => item[1].id !== payload)
      ),
  });

export const moveFigure = (state: FiguresState, payload: FigureMovePayload): FiguresState =>
  update(state, {
    figures: Object.fromEntries(
      moveInArray(Object.entries(state.figures), payload.oldIndex, payload.newIndex)
    ),
  });
