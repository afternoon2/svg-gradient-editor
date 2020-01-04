import React, { useReducer } from 'react';
import sizingsReducer from 'context/svg/sizings/reducer';
import { initialSizingsState, initialViewBoxState } from 'context/svg';
import ViewBoxReducer from 'context/svg/viewbox/reducer';
import SizingsContext from 'context/svg/sizings/context';
import ViewBoxContext from 'context/svg/viewbox/context';

const SvgState: React.FC = ({ children }) => {
  const [sizingsState, sizingsDispatch] = useReducer(sizingsReducer, initialSizingsState);
  const [viewBoxState, viewBoxDispatch] = useReducer(ViewBoxReducer, initialViewBoxState);

  return (
    <SizingsContext.Provider value={{ state: sizingsState, dispatch: sizingsDispatch }}>
      <ViewBoxContext.Provider value={{ state: viewBoxState, dispatch: viewBoxDispatch }}>
        {children}
      </ViewBoxContext.Provider>
    </SizingsContext.Provider>
  );
};

export default SvgState;
