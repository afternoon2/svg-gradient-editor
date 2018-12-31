import * as React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Gradient } from '../../../../../store/editor/_gradientTypes';
import {
  ListItemWrapper,
  WrapperHeader,
  WrapperContent,
  HeaderLink,
  FormRow
} from './layout';
import { FormFieldset } from './components/FormFieldset';
import { FormSelect } from './components/FormSelect';
import { deleteGradient, updateAttribute, updateGradientType } from '../../../../../store/editor/settings/actions';
import { AttributePayload, TypePayload } from '../../../../../store/editor/settings/types';
import { GradientAttributes } from './GradientAttributes';
import { ItemHeader } from './ItemHeader';

export type GradientListItemProps = {
  id: string,
  gradients: Gradient[],
  deleteGradient: (gradientId: string) => void,
  updateAttribute: (payload: AttributePayload) => void,
  updateGradientType: (payload: TypePayload) => void,
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
    const { deleteGradient, updateGradientType } = this.props;
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
            </FormFieldset>
          </FormRow>
          <FormRow>
            <FormFieldset legend="Attributes">
              <GradientAttributes
                attributes={this.gradient.attributes}
                type={this.gradient.type}
                onAttributeChange={this.onAttributeChange}
              />
            </FormFieldset>
          </FormRow>
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
}, dispatch);

export const GradientListItem = connect(
  mapStateToProps,
  mapDispatchToProps,
  null,
  { pure: false },
)(ListItem);
