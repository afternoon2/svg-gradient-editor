import * as React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Gradient } from '../../../../../store/editor/_gradientTypes';
import { ListItemWrapper, WrapperHeader, HeaderLink } from './layout';

export type GradientListItemProps = {
  gradient: Gradient,
  onDelete: (gradientId: string) => void,
};

export const GradientListItem = (props: GradientListItemProps) => {
  
  const [ collapsed, toggleCollapse ] = React.useState(false);
  const { gradient, onDelete } = props;
  
  return (
    <ListItemWrapper>
      <WrapperHeader>
        <HeaderLink onClick={() => toggleCollapse(!collapsed)}>
          <FontAwesomeIcon icon={collapsed ? 'caret-down' : 'caret-up'} />
        </HeaderLink>
        <span>{gradient.name}</span>
        <HeaderLink danger onClick={() => onDelete(gradient.id)}>
          <FontAwesomeIcon icon="trash" size="xs" />
        </HeaderLink>
      </WrapperHeader>
    </ListItemWrapper>
  );
};
