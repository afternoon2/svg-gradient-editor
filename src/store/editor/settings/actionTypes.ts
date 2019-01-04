const root: string = '@@editor/settings/';

const createActionType = (suffix: string): string => `${root}${suffix}`;

export const ADD_GRADIENT = createActionType('ADD_GRADIENT');
export const DELETE_GRADIENT = createActionType('DELETE_GRADIENT');
export const UPDATE_GRADIENT_TYPE = createActionType('UPDATE_GRADIENT_TYPE');
export const UPDATE_ATTRIBUTE = createActionType('UPDATE_ATTRIBUTE');
export const TOGGLE_FOCAL_POINTS = createActionType('TOGGLE_FOCAL_POINTS');
export const TOGGLE_CHROMA_USAGE = createActionType('TOGGLE_CHROMA_USAGE');
export const ADD_COLOR = createActionType('ADD_COLOR');
export const EDIT_COLOR = createActionType('EDIT_COLOR');
export const DELETE_COLOR = createActionType('DELETE_COLOR');
export const DELETE_ALL_COLORS = createActionType('DELETE_ALL_COLORS');
export const SET_INTERPOLATION = createActionType('SET_INTERPOLATION');
export const SET_COLOR_MODE = createActionType('SET_COLOR_MODE');
export const SET_LIGHTNESS_CORRECTION = createActionType('SET_LIGHTNESS_CORRECTION');
export const SET_SAMPLES = createActionType('SET_SAMPLES');
export const COMPUTE_CHROMA_COLORS = createActionType('COMPUTE_CHROMA_COLORS');
