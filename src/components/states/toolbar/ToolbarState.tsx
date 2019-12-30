import React from 'react';
import toolbarReducer, { initialToolbarState } from 'context/toolbar/reducer';
import ToolbarContext from 'context/toolbar/context';

const ToolbarState: React.FC = ({ children }) => {
  const [state, dispatch] = React.useReducer(toolbarReducer, initialToolbarState);

  return <ToolbarContext.Provider value={{ state, dispatch }}>{children}</ToolbarContext.Provider>;
};

export default ToolbarState;
