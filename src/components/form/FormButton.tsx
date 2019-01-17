import * as React from 'react';
import { darken } from 'polished';
import styled from '../../styles/styledComponents';

type FButtonProps = {
  level?: 'primary' | 'danger',
};

const FButton = styled.button<FButtonProps>`
  padding: .5em .5em;
  border: none;
  border-radius: 4px;
  background-color: ${props => props.level === 'danger' ? props.theme.colors.danger : props.theme.colors.primary};
  color: ${props => props.level === 'danger' ? '#fcfcfc' : props.theme.colors.text};
  transition: 120ms all ease-in-out;
  border: 1px solid ${props => props.theme.colors.main_300};
  outline: none;
  &:hover {
    cursor: pointer;
    background-color: ${props => darken(0.05, props.level === 'danger' ? props.theme.colors.danger : props.theme.colors.primary)};
  }
  &:focus {
    outline: 1px solid ${props => props.theme.colors.main_100};
  }
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

export type FormButtonProps = {
  onClick: (event?: React.MouseEvent) => void,
  children?: React.ReactNode,
  disabled?: boolean,
  title?: string,
  style?: any,
  level?: 'primary' | 'danger',
};

export const FormButton = (props: FormButtonProps) => {
  const {
    onClick,
    disabled,
    title,
    children,
    style,
  } = props;
  return (
    <FButton
      level={props.level}
      onClick={onClick}
      disabled={disabled}
      title={title}
      style={style}
    >
      {children}
    </FButton>
  );
};
