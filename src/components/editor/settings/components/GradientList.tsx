import * as React from 'react';
import { connect } from 'react-redux';
import { GradientListWrapper, NoContent } from './layout';
import { GradientListItem } from './item/GradientListItem';
import { Gradient } from '../../../../store/editor/_gradientTypes';

type GradientListComponentProps = {
  gradients: Gradient[],
};

const GradientListComponent = (props: GradientListComponentProps) => {
  const { gradients } = props;
  return (
    <GradientListWrapper>
      {gradients.map((gradient: Gradient) => (
        <GradientListItem
          key={gradient.id}
          id={gradient.id}
        />
      ))}
      {
        gradients.length === 0 ?
          <NoContent>No gradients created</NoContent> :
          null
      }
    </GradientListWrapper>
  );
};

const mapStateToProps = (state: any) => ({
  gradients: state.editor.settings.gradients,
  selected: state.editor.settings.selected,
});

export const GradientList = connect(
  mapStateToProps,
  null,
  null,
  { pure: false },
)(GradientListComponent);
