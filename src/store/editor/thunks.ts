import { Dispatch } from 'redux';
import * as payloads from './_payloads';
import * as actions from './actions';
import * as helpers from './helpers';
import * as selectors from './selectors';
import { Gradient } from '../_types';
import { EditorAction, EditorReducer } from './reducer';

const decideAboutChroma = (state: any, id: string) => (dispatch: Dispatch) => {
  const gradient: Gradient = <Gradient>selectors.fromGradients(state, id);
  if (gradient.useChroma) {
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
