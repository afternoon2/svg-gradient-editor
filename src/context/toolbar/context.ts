import { ToolbarContextValue, ToolbarState } from './interfaces';
import { createContext } from 'react';

const ToolbarContext = createContext<ToolbarContextValue>({
  state: {} as ToolbarState,
  dispatch: () => null,
});

export default ToolbarContext;
