import throttle from 'lodash.throttle';
import { Gradient } from '../_gradientTypes';
import { Dispatch } from 'react';
import * as actions from './actions';
import * as payloads from './types';
import { getGradient, computeChromaColors } from './helpers';
import { EditorSettingsListAction } from './reducer';

const THROTTLE_TIMES: number = 10;

const getGradientFromState = (id: string, state: any): Gradient =>
  <Gradient>getGradient(
    state.editor.settings.gradients,
    id
  );

export const updateGradientType = (payload: payloads.TypePayload) =>
  (
    dispatch: Dispatch<EditorSettingsListAction>,
    getState: () => any,
  ) => {
    const gradient = getGradientFromState(
      payload.id,
      getState(),
    )
    dispatch(actions.updateGradientType(payload));
    if (gradient.useChroma) {
      dispatch(actions.computeChromaColors(payload.id));
    }
  };

export const updateAttribute = (payload: payloads.AttributePayload) =>
  (
    dispatch: Dispatch<EditorSettingsListAction>,
    getState: () => any,
  ) => {
    const gradient: Gradient = <Gradient>getGradientFromState(
      payload.id,
      getState(),
    );
    dispatch(actions.updateAttribute(payload));
    if (gradient.useChroma) {
      const throttled = throttle(
        () => dispatch(actions.computeChromaColors(payload.id)),
        THROTTLE_TIMES,
      );
      throttled();
    }
  };

export const toggleFocalPoints = (
  payload: payloads.FocalPointsTogglePayload
  ) =>
  (
    dispatch: Dispatch<EditorSettingsListAction>,
    getState: () => any,
  ) => {
    const gradient: Gradient = <Gradient>getGradientFromState(
      payload.id,
      getState(),
    );
    dispatch(actions.toggleFocalPoints(payload));
    if (gradient.useChroma) {
      dispatch(actions.computeChromaColors(payload.id));
    }
  };

export const toggleChromaJs = (
  payload: payloads.ChromaJsTogglePayload,
) => (
  dispatch: Dispatch<EditorSettingsListAction>,
) => {
  dispatch(actions.toggleChromaJs(payload));
  if (payload.useChroma) {
    dispatch(actions.computeChromaColors(payload.id));
  }
};

export const addColor = (
  payload: payloads.AddColorPayload,
) => (
  dispatch: Dispatch<EditorSettingsListAction>,
  getState: () => void,
) => {
  const gradient: Gradient = <Gradient>getGradientFromState(
    payload.id,
    getState(),
  );
  dispatch(actions.addColor(payload));
  if (gradient.useChroma && gradient.colors.length >= 2) {
    dispatch(actions.computeChromaColors(payload.id));
  }
}

export const editColor = (
  payload: payloads.AddColorPayload,
) => (
  dispatch: Dispatch<EditorSettingsListAction>,
  getState: () => any,
) => {
  const gradient: Gradient = <Gradient>getGradientFromState(
    payload.id,
    getState(),
  );
  dispatch(actions.editColor(payload));
  if (gradient.useChroma) {
    const throttled = throttle(
      () => dispatch(actions.computeChromaColors(payload.id)),
      THROTTLE_TIMES
    );
    throttled();
  }
};

export const deleteColor = (
  payload: payloads.DeleteColorPayload,
) => (
  dispatch: Dispatch<EditorSettingsListAction>,
  getState: () => any,
) => {
  const gradient: Gradient = <Gradient>getGradientFromState(
    payload.gradientId,
    getState(),
  );
  dispatch(actions.deleteColor(payload));
  if (gradient.useChroma && gradient.colors.length >= 2) {
    dispatch(actions.computeChromaColors(payload.gradientId));
  }
};

export const setGradientInterpolation = (
  payload: payloads.InterpolationPayload,
) => (
  dispatch: Dispatch<EditorSettingsListAction>,
) => {
  dispatch(actions.setGradientInterpolation(payload));
  dispatch(actions.computeChromaColors(payload.id));
};

export const setGradientColorMode = (
  payload: payloads.ColorModePayload,
) => (
  dispatch: Dispatch<EditorSettingsListAction>,
) => {
  dispatch(actions.setGradientColorMode(payload));
  dispatch(actions.computeChromaColors(payload.id));
};

export const setLightnessCorrection = (
  payload: string,
) => (
  dispatch: Dispatch<EditorSettingsListAction>,
) => {
  dispatch(actions.setLightnessCorrection(payload));
  dispatch(actions.computeChromaColors(payload));
};

export const setGradientSamples = (
  payload: payloads.SamplesPayload,
) => (
  dispatch: Dispatch<EditorSettingsListAction>,
) => {
  dispatch(actions.setGradientSamples(payload));
  const throttled = throttle(
    () => dispatch(actions.computeChromaColors(payload.id)),
    THROTTLE_TIMES,
  );
  throttled();
};
