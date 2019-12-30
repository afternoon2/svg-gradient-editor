import { Dispatch } from "react";
import { ToolType, ToolName } from "./types";

export interface Tool {
  type: ToolType;
  name: ToolName;
  label: string;
}

export interface ToolbarState {
  selectedToolType: ToolType;
  selectedToolName: ToolName;
}

export interface ToolbarAction {
  type: 'SET_SELECTED_TOOL_TYPE' | 'SET_SELECTED_TOOL_NAME';
  payload: ToolType | ToolName;
}

export interface ToolbarContextValue {
  state: ToolbarState;
  dispatch: Dispatch<ToolbarAction>;
}
