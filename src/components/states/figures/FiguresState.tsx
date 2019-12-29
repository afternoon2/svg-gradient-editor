import React, { useReducer } from 'react';
import figuresReducer, { figuresInitialState } from '../../../context/figures/reducer';
import FiguresContext from '../../../context/figures/context';

const FiguresState: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(figuresReducer, figuresInitialState);

  return <FiguresContext.Provider value={{ state, dispatch }}>{children}</FiguresContext.Provider>;
};

export default FiguresState;
