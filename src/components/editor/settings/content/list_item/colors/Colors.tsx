import * as React from 'react';
import { connect } from 'react-redux';
import { Dispatch, bindActionCreators } from 'redux';
import { FormFieldset } from '../../../../../form/FormFieldset';
import { FormRow } from '../../../../../form/FormRow';
import { ColorList } from './list/ColorList';
import { ColorsHeader } from './header/ColorsHeader';
import * as selectors from '../../../../../../store/editor/selectors';
import * as actions from '../../../../../../store/editor/actions';

type ColorsComponentProps = {
  id: string,
  colorsAmount: number,
};

const ColorsComponent = (props: ColorsComponentProps): React.ReactNode => {

  const { id } = props;

  return (
    <FormFieldset legend="Colors">
      <ColorsHeader id={id} />
      <FormRow>
        <ColorList gradientId={id} />
      </FormRow>
    </FormFieldset>
  );
};

const mapStateToProps = (state: any, ownProps: { [key: string]: string }) => ({
  chroma: selectors.isUsingChroma(state, ownProps.id),
});

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators({
  addColor: actions.addColor,
  deleteAllColors: actions.deleteAllColors,
  toggleChroma: actions.toggleChroma,
}, dispatch);

export const Colors = connect(
  mapStateToProps,
  mapDispatchToProps,
)(ColorsComponent as React.ComponentType);
