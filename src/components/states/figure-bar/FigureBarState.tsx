import React, { useReducer } from 'react';
import figureBarReducer from 'context/figure-bar/reducer';
import FigureBarContext, { figureBarInitialState } from 'context/figure-bar/context';

const FigureBarState: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(figureBarReducer, figureBarInitialState);

  return <FigureBarContext.Provider value={{ state, dispatch }}>{children}</FigureBarContext.Provider>;
};

export default FigureBarState;
