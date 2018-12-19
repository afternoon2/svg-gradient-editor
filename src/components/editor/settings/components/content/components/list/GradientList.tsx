import * as React from 'react';
import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';
import { GradientListWrapper, List, ListItem, ListButton } from './layout';

const GradientListComponent = (props: any): React.ReactNode => {

  return (
    <GradientListWrapper>
      <ListButton className="primary">
        Add Gradient
      </ListButton>
      <List>
        <ListItem>
          <span>Hello!</span>
        </ListItem>
      </List>
    </GradientListWrapper>
  );
}

const mapStateToProps = (state: any) => ({
  gradients: state.editor.settings.list.gradients,
});

export const GradientList = connect(
  mapStateToProps,
  null,
  null,
  { pure: false }
)(GradientListComponent as React.ComponentType);
