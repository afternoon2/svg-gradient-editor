import * as React from 'react';
import { connect } from 'react-redux';
import { FormFieldset } from '../../../../../form/FormFieldset';
import { FormRow } from '../../../../../form/FormRow';
import { FormRange } from '../../../../../form/FormRange';
import { FormSelect } from '../../../../../form/FormSelect';
import * as selectors from '../../../../../../store/editor/selectors';
import * as payloads from '../../../../../../store/editor/_payloads';
import { setAttribute } from '../../../../../../store/editor/thunks';
import { LinearGradientAttributes, RadialGradientAttributes } from '../../../../../../store/_types';
import { Dispatch, bindActionCreators } from 'redux';

type AttributesComponentProps = {
  id: string,
  gradientType: 'linear' | 'radial',
  attributes: LinearGradientAttributes | RadialGradientAttributes,
  focalPoints: boolean,
  setAttribute: (payload: payloads.AttributeEditionPayload) => void,
};

const AttributesComponent = (props: AttributesComponentProps) => {
  const inputWidth: string = '70%';
  const labelWidth: string = '30px';
  const {
    id,
    attributes,
    setAttribute,
    focalPoints,
    gradientType,
  } = props;
  const renderLinearAttributes = () => (
    <React.Fragment>
      <FormRow>
        <FormRange
          inputWidth={inputWidth}
          labelWidth={labelWidth}
          label="x1"
          min={-1}
          max={1}
          step={0.01}
          value={(attributes as LinearGradientAttributes).x1}
          onChange={(event: React.ChangeEvent) => setAttribute({
            id,
            attribute: 'x1',
            value: parseFloat((event.target as HTMLInputElement).value)
          })}
        />
      </FormRow>
      <FormRow>
        <FormRange
          inputWidth={inputWidth}
          labelWidth={labelWidth}
          label="y1"
          min={-1}
          max={1}
          step={0.01}
          value={(attributes as LinearGradientAttributes).y1}
          onChange={(event: React.ChangeEvent) => setAttribute({
            id,
            attribute: 'y1',
            value: parseFloat((event.target as HTMLInputElement).value)
          })}
        />
      </FormRow>
      <FormRow>
        <FormRange
          inputWidth={inputWidth}
          labelWidth={labelWidth}
          label="x2"
          min={-1}
          max={1}
          step={0.01}
          value={(attributes as LinearGradientAttributes).x2}
          onChange={(event: React.ChangeEvent) => setAttribute({
            id,
            attribute: 'x2',
            value: parseFloat((event.target as HTMLInputElement).value)
          })}
        />
      </FormRow>
      <FormRow>
        <FormRange
          inputWidth={inputWidth}
          labelWidth={labelWidth}
          label="y2"
          min={-1}
          max={1}
          step={0.01}
          value={(attributes as LinearGradientAttributes).y2}
          onChange={(event: React.ChangeEvent) => setAttribute({
            id,
            attribute: 'y2',
            value: parseFloat((event.target as HTMLInputElement).value)
          })}
        />
      </FormRow>
    </React.Fragment>
  );
  const renderRadialAttributes = () => (
    <React.Fragment>
      <FormRow>
        <FormRange
          inputWidth={inputWidth}
          labelWidth={labelWidth}
          label="cx"
          min={-1}
          max={1}
          step={0.01}
          value={(attributes as RadialGradientAttributes).cx}
          onChange={(event: React.ChangeEvent) => setAttribute({
            id,
            attribute: 'cx',
            value: parseFloat((event.target as HTMLInputElement).value)
          })}
        />
      </FormRow>
      <FormRow>
        <FormRange
          inputWidth={inputWidth}
          labelWidth={labelWidth}
          label="cy"
          min={-1}
          max={1}
          step={0.01}
          value={(attributes as RadialGradientAttributes).cy}
          onChange={(event: React.ChangeEvent) => setAttribute({
            id,
            attribute: 'cy',
            value: parseFloat((event.target as HTMLInputElement).value)
          })}
        />
      </FormRow>
      <FormRow>
        <FormRange
          inputWidth={inputWidth}
          labelWidth={labelWidth}
          label="r"
          min={0.01}
          max={1}
          step={0.01}
          value={(attributes as RadialGradientAttributes).r}
          onChange={(event: React.ChangeEvent) => setAttribute({
            id,
            attribute: 'r',
            value: parseFloat((event.target as HTMLInputElement).value)
          })}
        />
      </FormRow>
      {
        focalPoints
          ? <React.Fragment>
            <FormRow>
              <FormRange
                inputWidth={inputWidth}
                labelWidth={labelWidth}
                label="fx"
                min={-1}
                max={1}
                step={0.01}
                value={(attributes as RadialGradientAttributes).fx}
                onChange={(event: React.ChangeEvent) => setAttribute({
                  id,
                  attribute: 'fx',
                  value: parseFloat((event.target as HTMLInputElement).value)
                })}
              />
            </FormRow>
            <FormRow>
              <FormRange
                inputWidth={inputWidth}
                labelWidth={labelWidth}
                label="fy"
                min={-1}
                max={1}
                step={0.01}
                value={(attributes as RadialGradientAttributes).fy}
                onChange={(event: React.ChangeEvent) => setAttribute({
                  id,
                  attribute: 'fy',
                  value: parseFloat((event.target as HTMLInputElement).value)
                })}
              />
            </FormRow>
          </React.Fragment>
          : null
      }
      <FormRow>
        <FormSelect
          label="spread method"
          options={['pad', 'repeat', 'reflect']}
          value={(attributes as RadialGradientAttributes).spreadMethod}
          onChange={(event: React.ChangeEvent) => setAttribute({
            id,
            attribute: 'spreadMethod',
            value: (event.target as HTMLInputElement).value,
          })}
        />
      </FormRow>
    </React.Fragment>
  );

  return (
    <FormFieldset legend="Attributes">
      {
        gradientType === 'linear'
        ? renderLinearAttributes()
        : renderRadialAttributes()
      }
    </FormFieldset>
  );
};

const mapStateToProps = (state: any, ownProps: { [key: string]: string }) => ({
  gradientType: selectors.typeofGradient(state, ownProps.id),
  attributes: selectors.attributesOf(state, ownProps.id),
  focalPoints: selectors.hasFocalPoints(state, ownProps.id),
});

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators({
  setAttribute,
}, dispatch);

export const Attributes = connect(
  mapStateToProps,
  mapDispatchToProps,
)(AttributesComponent as React.ComponentType);
