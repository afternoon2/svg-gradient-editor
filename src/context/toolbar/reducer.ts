import { ToolbarState, ToolbarAction } from './interfaces';
import * as mutations from './mutations';
import { ToolType, ToolName } from './types';

export const initialToolbarState: ToolbarState = {
  selectedToolType: 'move',
  selectedToolName: 'select',
};

const toolbarReducer = (state: ToolbarState, { type, payload }: ToolbarAction): ToolbarState => {
  switch (type) {
    case 'SET_SELECTED_TOOL_TYPE':
      return mutations.setSelectedToolType(state, payload as ToolType);
    case 'SET_SELECTED_TOOL_NAME':
      return mutations.setSelectedToolName(state, payload as ToolName);
    default:
      return initialToolbarState;
  }
};

export default toolbarReducer;
