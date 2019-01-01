import * as React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Gradient, ColorMode } from '../../../../../store/editor/_gradientTypes';
import {
  ListItemWrapper,
  WrapperContent,
  FormRow
} from './layout';
import { FormFieldset } from './components/FormFieldset';
import { FormSelect } from './components/FormSelect';
import { FormSwitch } from './components/FormSwitch';
import {
  deleteGradient,
  updateAttribute,
  updateGradientType,
  toggleFocalPoints,
  toggleChromaJs,
  addColor,
  editColor,
  deleteColor,
  setGradientInterpolation,
  setGradientColorMode,
  setLightnessCorrection,
  setGradientSamples,
} from '../../../../../store/editor/settings/actions';
import {
  AttributePayload,
  TypePayload,
  FocalPointsTogglePayload,
  ChromaJsTogglePayload,
  AddColorPayload,
  DeleteColorPayload,
  InterpolationPayload,
  ColorModePayload,
  SamplesPayload,
} from '../../../../../store/editor/settings/types';
import { GradientAttributes } from './GradientAttributes';
import { GradientColors } from './GradientColors';
import { GradientChromaAttributes } from './GradientChromaAttributes';
import { ItemHeader } from './ItemHeader';

export type GradientListItemProps = {
  id: string,
  gradients: Gradient[],
  deleteGradient: (gradientId: string) => void,
  updateAttribute: (payload: AttributePayload) => void,
  updateGradientType: (payload: TypePayload) => void,
  toggleFocalPoints: (payload: FocalPointsTogglePayload) => void,
  toggleChromaJs: (payload: ChromaJsTogglePayload) => void,
  addColor: (payload: AddColorPayload) => void,
  editColor: (payload: AddColorPayload) => void,
  deleteColor: (payload: DeleteColorPayload) => void,
  setGradientInterpolation: (payload: InterpolationPayload) => void,
  setGradientColorMode: (payload: ColorModePayload) => void,
  setLightnessCorrection: (gradientId: string) => void,
  setGradientSamples: (payload: SamplesPayload) => void,
};

class ListItem extends React.Component<GradientListItemProps> {

  public state = {
    collapsed: false,
    types: [
      'linear',
      'radial',
    ],
  };

  private get gradient(): Gradient {
    return (
      this.props.gradients.find(
        (gradient: Gradient) => gradient.id === this.props.id
      ) as Gradient
    );
  }

  private onAttributeChange = (
    event: React.ChangeEvent,
    attribute: string,
    value: string | number
  ) => {
    this.props.updateAttribute({
      id: this.gradient.id,
      attribute,
      value: value,
    });
    event.preventDefault();
  }

  private toggleCollapse = () => this.setState({ collapsed: !this.state.collapsed });

  public render() {
    const { collapsed, types } = this.state;
    const { deleteGradient, updateGradientType, toggleFocalPoints } = this.props;
    return (
      <ListItemWrapper>
        <ItemHeader
          toggleCollapse={this.toggleCollapse}
          deleteGradient={deleteGradient}
          collapsed={collapsed}
          gradient={this.gradient}
        />
        <WrapperContent hidden={collapsed}>
          <FormRow>
            <FormFieldset legend="Properties">
              <FormRow>
                <FormSelect
                  value={this.gradient.type}
                  options={types}
                  label="Type"
                  onChange={(event: React.ChangeEvent) => updateGradientType({
                    id: this.gradient.id,
                    gradientType: (event.target as HTMLInputElement).value as ('linear' | 'radial'),
                  })}
                />
              </FormRow>
              {
                this.gradient.type === 'radial' ?
                  <FormRow>
                    <FormSwitch
                      label="Focal points"
                      checked={this.gradient.focalPoints}
                      onChange={(focalPoints: boolean) => toggleFocalPoints({
                        id: this.gradient.id,
                        focalPoints,
                      })}
                    />
                  </FormRow> :
                  null
              }
            </FormFieldset>
          </FormRow>
          <FormRow>
            <FormFieldset legend="Attributes">
              <GradientAttributes
                attributes={this.gradient.attributes}
                type={this.gradient.type}
                onAttributeChange={this.onAttributeChange}
                focalPoints={this.gradient.focalPoints}
              />
            </FormFieldset>
          </FormRow>
          <FormRow>
            <FormFieldset legend="Colors">
              <GradientColors
                addColor={this.props.addColor}
                deleteColor={this.props.deleteColor}
                editColor={this.props.editColor}
                colors={this.gradient.colors}
                gradientId={this.gradient.id}
                useChroma={this.gradient.useChroma}
                onChromaJsToggle={this.props.toggleChromaJs}
              />
            </FormFieldset>
          </FormRow>
          {
            this.gradient.useChroma && this.gradient.colors.length >= 2 ?
              <FormRow>
                <FormFieldset legend="Chroma">
                  <GradientChromaAttributes
                    attributes={this.gradient.chroma}
                    onInterpolationChange={
                      (interpolation: 'linear' | 'bezier') => this.props.setGradientInterpolation({
                        id: this.gradient.id,
                        interpolation,
                      })}
                    onLightnessCorrection={() => this.props.setLightnessCorrection(
                      this.gradient.id,
                    )}
                    onModeChange={(mode: ColorMode) => this.props.setGradientColorMode({
                      id: this.gradient.id,
                      mode,
                    })}
                    onSamplesChange={(samples: number) => this.props.setGradientSamples({
                      id: this.gradient.id,
                      samples,
                    })}
                  />
                </FormFieldset>
              </FormRow> :
              null
          }
        </WrapperContent>
      </ListItemWrapper>
    );
  }
}

const mapStateToProps = (state: any) => ({
  gradients: state.editor.settings.gradients,
});

const mapDispatchToProps = (dispatch: any) => bindActionCreators({
  deleteGradient,
  updateAttribute,
  updateGradientType,
  toggleFocalPoints,
  toggleChromaJs,
  addColor,
  editColor,
  deleteColor,
  setGradientInterpolation,
  setGradientColorMode,
  setLightnessCorrection,
  setGradientSamples,
}, dispatch);

export const GradientListItem = connect(
  mapStateToProps,
  mapDispatchToProps,
  null,
  { pure: false },
)(ListItem);
