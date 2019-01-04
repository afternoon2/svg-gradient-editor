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
import * as actions from '../../../../../store/editor/settings/actions';
import * as payloads from '../../../../../store/editor/settings/types';
import { GradientAttributes } from './GradientAttributes';
import { GradientColors } from './GradientColors';
import { GradientChromaAttributes } from './GradientChromaAttributes';
import { ItemHeader } from './ItemHeader';
import { ColorInterpolation } from '../../../../../store/editor/_gradientTypes';

export type GradientListItemProps = {
  id: string,
  gradients: Gradient[],
  deleteGradient: (gradientId: string) => void,
  updateAttribute: (payload: payloads.AttributePayload) => void,
  updateGradientType: (payload: payloads.TypePayload) => void,
  toggleFocalPoints: (payload: payloads.FocalPointsTogglePayload) => void,
  toggleChromaJs: (payload: payloads.ChromaJsTogglePayload) => void,
  addColor: (payload: payloads.AddColorPayload) => void,
  editColor: (payload: payloads.AddColorPayload) => void,
  deleteColor: (payload: payloads.DeleteColorPayload) => void,
  setGradientInterpolation: (payload: payloads.InterpolationPayload) => void,
  setGradientColorMode: (payload: payloads.ColorModePayload) => void,
  setLightnessCorrection: (gradientId: string) => void,
  setGradientSamples: (payload: payloads.SamplesPayload) => void,
  deleteAllColors: (payload: string) => void,
  computeChromaColors: (payload: string) => void,
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
            <FormFieldset legend="Colors">
              <GradientColors
                addColor={this.props.addColor}
                deleteColor={this.props.deleteColor}
                editColor={this.props.editColor}
                colors={this.gradient.colors}
                gradientId={this.gradient.id}
                useChroma={this.gradient.useChroma}
                onChromaJsToggle={this.props.toggleChromaJs}
                deleteAllColors={() => this.props.deleteAllColors(this.gradient.id)}
              />
            </FormFieldset>
          </FormRow>
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
          {
            this.gradient.useChroma && this.gradient.colors.length >= 2 ?
              <FormRow>
                <FormFieldset legend="Chroma">
                  <GradientChromaAttributes
                    attributes={this.gradient.chroma}
                    onInterpolationChange={
                      (interpolation: ColorInterpolation) => this.props.setGradientInterpolation({
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
  ...actions,
}, dispatch);

export const GradientListItem = connect(
  mapStateToProps,
  mapDispatchToProps,
  null,
  { pure: false },
)(ListItem);
