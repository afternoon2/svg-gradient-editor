import { appInitialState } from '../../../context/app/context';
import AppContext from '../../../context/app/context';
import appReducer from '../../../context/app/reducer';
import React, { useReducer } from 'react';

const AppState: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(appReducer, appInitialState);

  return <AppContext.Provider value={{ state, dispatch }}>{children}</AppContext.Provider>;
};

export default AppState;
