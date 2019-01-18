import { Dispatch } from 'redux';
import * as payloads from './_payloads';
import * as actions from './actions';
import * as helpers from './helpers';
import { EditorAction, EditorReducer } from './reducer';

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
  };
