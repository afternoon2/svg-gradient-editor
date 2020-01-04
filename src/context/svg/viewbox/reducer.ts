import { SvgAction, SvgProps } from '../interfaces';
import { initialViewBoxState } from './context';

const viewBoxReducer = (state: SvgProps, { type, payload }: SvgAction<'SET_VIEW_BOX_PROP'>): SvgProps => {
  switch (type) {
    case 'SET_VIEW_BOX_PROP':
      return {
        ...state,
        ...payload,
      };
    default:
      return initialViewBoxState;
  }
};

export default viewBoxReducer;
