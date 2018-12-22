import * as React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { GradientListWrapper } from './layout';
import { GradientListItem } from './GradientListItem';
import { Gradient } from '../../../../store/editor/_gradientTypes';

type GradientListComponentProps = {
  gradients: Gradient[],
};

class GradientListComponent extends React.Component<GradientListComponentProps> {
  public render(): React.ReactNode {
    const { gradients } = this.props;
    return (
      <GradientListWrapper>
          {gradients.map((gradient: Gradient): React.ReactNode => (
            <GradientListItem
              key={gradient.id}
              gradient={gradient}
            />
          ))}
      </GradientListWrapper>
    );
  }
}

const mapStateToProps = (state: any) => ({
  gradients: state.editor.settings.gradients,
  selected: state.editor.settings.selected,
});

// const mapDispatchToProps = (dispatch: any) => bindActionCreators({

// }, dispatch)

export const GradientList = connect(
  mapStateToProps,
  null,
  null,
  { pure: false },
)(GradientListComponent);
