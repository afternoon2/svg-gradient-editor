import * as React from 'react';
import { darken } from 'polished';
import styled from '../../../../../../styles/styledComponents';

const FButton = styled.button`
  padding: .5em .5em;
  border: none;
  border-radius: 4px;
  background-color: ${props => props.theme.colors.primary};
  color: ${props => props.theme.colors.text};
  transition: 120ms all ease-in-out;
  &:hover {
    cursor: pointer;
    background-color: ${props => darken(0.05, props.theme.colors.primary)};
  }
`;

export type FormButtonProps = {
  text: string,
  onClick: (event?: React.MouseEvent) => void,
  children: React.ReactNode,
  disabled?: boolean,
  title?: string,
};

export const FormButton = (props: FormButtonProps) => {
  const {
    onClick,
    disabled,
    title,
    children,
  } = props;
  return (
    <FButton
      onClick={onClick}
      disabled={disabled}
      title={title}
    >
      {children}
    </FButton>
  );
};
