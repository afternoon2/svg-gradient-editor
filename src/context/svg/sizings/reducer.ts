import { SvgAction, SvgProps } from '../interfaces';
import { initialSizingsState } from './context';

const sizingsReducer = (state: SvgProps, { type, payload }: SvgAction<'SET_SIZINGS_PROP'>): SvgProps => {
  switch (type) {
    case 'SET_SIZINGS_PROP':
      return {
        ...state,
        ...payload,
      };
    default:
      return initialSizingsState;
  }
};

export default sizingsReducer;
