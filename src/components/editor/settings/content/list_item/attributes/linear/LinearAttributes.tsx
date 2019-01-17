import * as React from 'react';
import { connect } from 'react-redux';
import nanoid from 'nanoid';
import { FormRow } from '../../../../../../form/FormRow';
import { FormRange } from '../../../../../../form/FormRange';
import * as payloads from '../../../../../../../store/editor/_payloads';
import * as selectors from '../../../../../../../store/editor/selectors';
import { setAttribute } from '../../../../../../../store/editor/actions';
import { Dispatch, bindActionCreators } from 'redux';

type LinearAttributesComponentProps = {
  id: string,
  x1: number,
  y1: number,
  x2: number,
  y2: number,
  setAttribute: (payload: payloads.AttributeEditionPayload) => void,
};

const LinearAttributesComponent = (props: LinearAttributesComponentProps) => {
  const inputWidth: string = '70%';
  const labelWidth: string = '30px';
  const { id, x1, y1, x2, y2, setAttribute } = props;

  return (
    <React.Fragment>
      <FormRow>
        <FormRange
          inputWidth={inputWidth}
          labelWidth={labelWidth}
          onChange={(event: React.ChangeEvent) => setAttribute({
            id,
            attribute: 'x1',
            value: parseFloat((event.target as HTMLInputElement).value),
          })}
          min={-1}
          max={1}
          step={0.01}
          value={x1}
          label="x1"
        />
      </FormRow>
      <FormRow>
        <FormRange
          inputWidth={inputWidth}
          labelWidth={labelWidth}
          onChange={(event: React.ChangeEvent) => setAttribute({
            id,
            attribute: 'y1',
            value: parseFloat((event.target as HTMLInputElement).value),
          })}
          min={-1}
          max={1}
          step={0.01}
          value={y1}
          label="y1"
        />
      </FormRow>
      <FormRow>
        <FormRange
          inputWidth={inputWidth}
          labelWidth={labelWidth}
          onChange={(event: React.ChangeEvent) => setAttribute({
            id,
            attribute: 'x2',
            value: parseFloat((event.target as HTMLInputElement).value),
          })}
          min={-1}
          max={1}
          step={0.01}
          value={x2}
          label="x2"
        />
      </FormRow>
      <FormRow>
        <FormRange
          inputWidth={inputWidth}
          labelWidth={labelWidth}
          onChange={(event: React.ChangeEvent) => setAttribute({
            id,
            attribute: 'y2',
            value: parseFloat((event.target as HTMLInputElement).value),
          })}
          min={-1}
          max={1}
          step={0.01}
          value={y2}
          label="y2"
        />
      </FormRow>
    </React.Fragment>
  );
};

const mapStateToProps = (state: any, ownProps: { [key: string]: string }) => ({
  x1: selectors.attributeFromGradient(state, ownProps.id)('x1'),
  y1: selectors.attributeFromGradient(state, ownProps.id)('y1'),
  x2: selectors.attributeFromGradient(state, ownProps.id)('x2'),
  y2: selectors.attributeFromGradient(state, ownProps.id)('y2'),
});

export const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators({
  setAttribute,
}, dispatch);

export const LinearAttributes = connect(
  mapStateToProps,
  mapDispatchToProps,
)(LinearAttributesComponent);
