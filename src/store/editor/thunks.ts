import { Dispatch } from 'redux';
import * as payloads from './_payloads';
import * as actions from './actions';
import * as helpers from './helpers';
import * as selectors from './selectors';
import { Gradient } from '../_types';
import { EditorAction, EditorReducer } from './reducer';

const decideAboutChroma = (state: any, id: string) => (dispatch: Dispatch) => {
  const gradient: Gradient = <Gradient>selectors.fromGradients(state, id);
  if (gradient.useChroma && gradient.colors.length >= 2) {
    dispatch(actions.computeChromaColors(id));
  }
}

export const setGradientType = (payload: payloads.GradientTypePayload) =>
  (
    dispatch: Dispatch<EditorAction>,
    getState: () => EditorReducer,
  ) => {
    dispatch(actions.setGradientType(payload));
    dispatch(actions.replaceGradientAttributes({
      ...payload,
      attributes: payload.type === 'linear'
        ? helpers.defaultLinearAttributes()
        : helpers.defaultRadialAttributes(),
    }));
    decideAboutChroma(getState(), payload.id)(dispatch as Dispatch);
  };

export const addColor = (payload: payloads.ColorPayload) =>
  (
    dispatch: Dispatch<EditorAction>,
    getState: () => EditorReducer,
  ) => {
    dispatch(actions.addColor(payload));
    decideAboutChroma(getState(), payload.gradientId)(dispatch as Dispatch);
  };

export const deleteColor = (payload: payloads.ColorPayload) =>
  (
    dispatch: Dispatch<EditorAction>,
    getState: () => EditorReducer,
  ) => {
    dispatch(actions.deleteColor(payload));
    decideAboutChroma(getState(), payload.gradientId)(dispatch as Dispatch);
  };

export const editColor = (payload: payloads.ColorEditionPayload) =>
  (
    dispatch: Dispatch<EditorAction>,
    getState: () => EditorReducer,
  ) => {
    dispatch(actions.editColor(payload));
    decideAboutChroma(getState(), payload.gradientId)(dispatch as Dispatch);
  };

export const toggleChroma = (payload: string) =>
  (
    dispatch: Dispatch<EditorAction>,
    getState: () => EditorReducer,
  ) => {
    dispatch(actions.toggleChroma(payload));
    decideAboutChroma(getState(), payload)(dispatch as Dispatch);
  };

export const setAttribute = (payload: payloads.AttributeEditionPayload) =>
  (
    dispatch: Dispatch<EditorAction>,
    getState: () => EditorReducer,
  ) => {
    dispatch(actions.setAttribute(payload));
    decideAboutChroma(getState(), payload.id)(dispatch as Dispatch);
  };

export const setChromaAttribute = (payload: payloads.ChromaEditionPayload) =>
  (
    dispatch: Dispatch<EditorAction>,
    getState: () => EditorReducer,
  ) => {
    dispatch(actions.setChromaAttribute(payload));
    decideAboutChroma(getState(), payload.id)(dispatch as Dispatch);
  };