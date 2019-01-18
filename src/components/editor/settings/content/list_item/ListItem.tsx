import * as React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Item, ItemHeader, ItemContent, IconButton, HeaderLink } from './layout';
import { Colors } from './colors/Colors';
import { Properties } from './properties/Properties';
import { Attributes } from './attributes/Attributes';
import { Chroma } from './chroma/Chroma';
import * as actions from '../../../../../store/editor/actions';
import { isUsingChroma, colorsAmountInGradient } from '../../../../../store/editor/selectors'

type ListItemComponentProps = {
  id: string,
  index: number,
  chroma: boolean,
  colorsAmount: number,
  deleteGradient: (id: string) => void,
};

const ListItemComponent = (props: ListItemComponentProps) => {

  const [ collapsed, toggleCollapsed ] = React.useState(false);
  const { colorsAmount, chroma, index, id, deleteGradient } = props;
  const renderContent = () => collapsed ? null : <ItemContent>
    <Colors id={id} />
    {
      chroma && colorsAmount >= 2
        ? <Chroma id={id} />
        : null
    }
    <Properties id={id} />
    <Attributes id={id} />
  </ItemContent>
  return (
    <Item>
      <ItemHeader>
        <HeaderLink
          title="Toggle gradient"
          onClick={(event: React.MouseEvent) => {
            event.preventDefault();
            toggleCollapsed(!collapsed);
          }}
        >
          <FontAwesomeIcon
            icon={collapsed ? 'caret-down' : 'caret-up'}
          />
        </HeaderLink>
        <span>Gradient {index + 1}</span>
        <HeaderLink
          title="Delete gradient"
          onClick={() => deleteGradient(id)}
          danger
        >
          <FontAwesomeIcon icon="trash" />
        </HeaderLink>
      </ItemHeader>
      {renderContent()}
    </Item>
  );
};

const mapStateToProps = (state: any, ownProps: { [key: string]: any }) => ({
  chroma: isUsingChroma(state, ownProps.id),
  colorsAmount: colorsAmountInGradient(state, ownProps.id),
});

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators({
  deleteGradient: actions.deleteGradient,
}, dispatch);

export const ListItem = connect(
  mapStateToProps,
  mapDispatchToProps,
  null,
  { pure: false },
)(ListItemComponent);
