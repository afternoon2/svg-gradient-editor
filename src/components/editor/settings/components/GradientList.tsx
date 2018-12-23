import * as React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { GradientListWrapper, NoContent } from './layout';
import { GradientListItem } from './item/GradientListItem';
import { Gradient } from '../../../../store/editor/_gradientTypes';
import { deleteGradient } from '../../../../store/editor/settings/actions';

type GradientListComponentProps = {
  gradients: Gradient[],
  deleteGradient: (id: string) => void,
};

class GradientListComponent extends React.Component<GradientListComponentProps> {
  public render(): React.ReactNode {
    const { gradients, deleteGradient } = this.props;
    return (
      <GradientListWrapper>
        {gradients.map((gradient: Gradient) => (
          <GradientListItem
            gradient={gradient}
            key={gradient.id}
            onDelete={deleteGradient}
          />
        ))}
        {
          gradients.length === 0 ? <NoContent>No gradients created</NoContent> : null
        }
      </GradientListWrapper>
    );
  }
}

const mapStateToProps = (state: any) => ({
  gradients: state.editor.settings.gradients,
  selected: state.editor.settings.selected,
});

const mapDispatchToProps = (dispatch: any) => bindActionCreators({
  deleteGradient,
}, dispatch)

export const GradientList = connect(
  mapStateToProps,
  mapDispatchToProps,
  null,
  { pure: false },
)(GradientListComponent);
