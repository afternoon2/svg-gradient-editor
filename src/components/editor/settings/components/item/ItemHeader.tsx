import * as React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { WrapperHeader, HeaderLink } from './layout';
import { Gradient } from '../../../../../store/editor/_gradientTypes';

export type ItemHeaderProps = {
  toggleCollapse: () => void,
  deleteGradient: (id: string) => void,
  collapsed: boolean,
  gradient: Gradient,
};

export const ItemHeader = (props: ItemHeaderProps) => {
  const {
    toggleCollapse,
    deleteGradient,
    collapsed,
    gradient,
   } = props;
  return (
    <WrapperHeader>
      <HeaderLink
        onClick={() => toggleCollapse()}
        title="Show/hide gradient"
      >
        <FontAwesomeIcon icon={collapsed ? 'caret-down' : 'caret-up'} />
      </HeaderLink>
      <span>{gradient.name}</span>
      <HeaderLink
        danger
        onClick={() => deleteGradient(gradient.id)}
        title="Delete gradient"
      >
        <FontAwesomeIcon icon="trash" size="xs" />
      </HeaderLink>
    </WrapperHeader>
  );
};
