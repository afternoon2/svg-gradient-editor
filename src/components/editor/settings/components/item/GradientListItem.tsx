import * as React from 'react';
import nanoid from 'nanoid';
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
import { FormNumber } from './components/FormNumber';
import { deleteGradient, updateAttribute } from '../../../../../store/editor/settings/actions';
import { AttributePayload } from '../../../../../store/editor/settings/types';

export type GradientListItemProps = {
  id: string,
  gradients: Gradient[],
  deleteGradient: (gradientId: string) => void,
  updateAttribute: (payload: AttributePayload) => void,
};

class ListItem extends React.Component<GradientListItemProps> {

  public state = {
    collapsed: false,
    types: [
      'linear',
      'radial',
    ],
    spreadMethods: [
      'none',
      'pad',
      'repeat',
      'reflect',
    ],
  };

  private get gradient(): Gradient {
    return (
      this.props.gradients.find(
        (gradient: Gradient) => gradient.id === this.props.id
      ) as Gradient
    );
  }

  private renderAttributes = () => {
    const { attributes } = this.gradient;
    const { spreadMethods } = this.state;
    return Object.entries(attributes)
      .map((entry: [string, any]) => {
        const id = nanoid();
        switch (entry[0]) {
          case 'x1':
          case 'y1':
          case 'x2':
          case 'y2':
          case 'fx':
          case 'fy':
          case 'cx':
          case 'cy':
          case 'r':
            return (
              <FormRow key={id}>
                {entry[1]}
                <FormNumber
                  label={entry[0]}
                  min={-10000}
                  max={10000}
                  step={1}
                  value={parseInt(entry[1], 10)}
                  onChange={(event: React.ChangeEvent) => this.onAttributeChange(
                    event,
                    entry[0],
                    parseInt((event.target as HTMLInputElement).value, 10),
                  )}
                />
              </FormRow>
            );
          case 'spreadMethod':
            return (
              <FormRow key={id}>
                <FormSelect
                  label={entry[0]}
                  options={spreadMethods}
                  value={entry[1]}
                  onChange={(event: React.ChangeEvent) => this.onAttributeChange(
                    event,
                    entry[0],
                    (event.target as HTMLInputElement).value,
                  )}
                />
              </FormRow>
            );
        }
      });
  };

  private onAttributeChange = (
    event: React.ChangeEvent,
    attribute: string,
    value: string | number
  ) => {
    event.preventDefault();
    this.props.updateAttribute({
      id: this.gradient.id,
      attribute,
      value: value,
    });
  }

  private toggleCollapse = () => this.setState({ collapsed: !this.state.collapsed });

  public render() {
    const { collapsed, types } = this.state;
    const { deleteGradient } = this.props;
    return (
      <ListItemWrapper>
        <WrapperHeader>
          <HeaderLink
            onClick={() => this.toggleCollapse()}
            title="Show/hide gradient"
          >
            <FontAwesomeIcon icon={collapsed ? 'caret-down' : 'caret-up'} />
          </HeaderLink>
          <span>{this.gradient.name}</span>
          <HeaderLink
            danger
            onClick={() => deleteGradient(this.gradient.id)}
            title="Delete gradient"
          >
            <FontAwesomeIcon icon="trash" size="xs" />
          </HeaderLink>
        </WrapperHeader>
        <WrapperContent hidden={collapsed}>
          <FormRow>
            <FormFieldset legend="Properties">
              <FormRow>
                <FormSelect
                  value={this.gradient.type}
                  options={types}
                  label="Type"
                  onChange={() => { }}
                />
              </FormRow>
            </FormFieldset>
          </FormRow>
          <FormRow>
            <FormFieldset legend="Attributes">
              {this.renderAttributes()}
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
  updateAttribute
}, dispatch);

export const GradientListItem = connect(
  mapStateToProps,
  mapDispatchToProps,
  null,
  { pure: false },
)(ListItem);
