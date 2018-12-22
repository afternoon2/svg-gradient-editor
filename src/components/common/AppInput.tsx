import * as React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from '../../styles/styledComponents';
import { TextInput } from './TextInput';
import { IconProp } from '@fortawesome/fontawesome-svg-core'

type AppInputWrapperProps = {
  width: string;
  disabled?: boolean;
};

const AppInputWrapper = styled.div<AppInputWrapperProps>`
  width: ${props => props.width || '100%'};
  height: 35px;
  display: flex;
  align-items: center;
  position: relative;
  transition: 120ms all ease-in-out;
  .AppInputIcon {
    position: absolute;
    right: .5em;
    z-index: 2;
    color: ${props => props.theme.colors.text};
    margin-left: .5em;
    background-color: ${props => props.theme.colors.main_400};
    opacity: ${props => props.disabled ? 0.5 : 1};
  }
`;

export type AppInputProps = {
  width: string;
  placeholder: string;
  disabled: boolean;
  icon?: string;
  title?: string;
  className?: string;
  onChange?: (event: React.ChangeEvent) => void;
  onKeyDown?: (event: React.KeyboardEvent) => void;
};

export const AppInput = (props: AppInputProps) => {
  return (
    <AppInputWrapper
      width={props.width}
      disabled={props.disabled}
      className={props.className}
    >
      <TextInput
        placeholder={props.placeholder}
        disabled={props.disabled}
        onChange={props.onChange}
        onKeyDown={props.onKeyDown}
        title={props.title}
      />
      <FontAwesomeIcon 
        className="AppInputIcon"
        icon={(props.icon as IconProp)}
      />
    </AppInputWrapper>
  );
};
