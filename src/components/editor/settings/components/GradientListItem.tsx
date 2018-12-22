import * as React from 'react';
import { GradientListItemWrapper } from './layout';
import { Gradient } from '../../../../store/editor/_gradientTypes';

export type GradientListItemProps = {
  gradient: Gradient,
}

export const GradientListItem = (props: GradientListItemProps) => {
  
  const { gradient } = props;
  
  return (
    <GradientListItemWrapper>
    </GradientListItemWrapper>
  );
};
