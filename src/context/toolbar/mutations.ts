import update from 'immutability-helper';
import { ToolbarState } from './interfaces';
import { ToolType, ToolName } from './types';

export const setSelectedToolType = (state: ToolbarState, payload: ToolType): ToolbarState =>
  update(state, {
    selectedToolType: {
      $set: payload,
    },
    selectedToolName: {
      $set: payload === 'shape' ? 'rect' : 'select',
    },
  });

export const setSelectedToolName = (state: ToolbarState, payload: ToolName): ToolbarState =>
  update(state, {
    selectedToolName: {
      $set: payload,
    },
    selectedToolType: {
      $set: payload === 'select' ? 'shape' : 'shape',
    },
  });
