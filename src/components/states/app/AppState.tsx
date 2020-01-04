import React, { useReducer } from 'react';
import AppContext, { appInitialState } from '../../../context/app/context';

import appReducer from '../../../context/app/reducer';

const AppState: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(appReducer, appInitialState);

  return <AppContext.Provider value={{ state, dispatch }}>{children}</AppContext.Provider>;
};

export default AppState;
