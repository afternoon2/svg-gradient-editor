import * as React from 'react';
import styled from '../../styles/styledComponents';
import { placeholder } from 'polished';

const AppInputWrapper = styled.div`
  width: 100%;
  height: auto;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
`;

const WrapperInput = styled.input<{ error: boolean }>`
  box-sizing: border-box;
  padding: .5em;
  width: 100%;
  height: 35px;
  box-sizing: border-box;
  border-radius: 4px;
  border: 1px solid ${props => props.theme.colors.main_400};
  outline: none;
  background-color: ${props => props.theme.colors.main_300};
  color: ${props => props.theme.colors.text};
  border-bottom: ${props => props.error ? `2px solid ${props.theme.colors.danger}px` : null};
  &:focus {
    outline: none;
  }
`;

const WrapperMessage = styled.span`
  width: 100%;
  height: 12px;
  font-size: 10px;
  font-weight: bold;
  box-sizing: border-box;
  padding-top: 5px;
  color: ${props => props.theme.colors.danger};
`;

type AppInputProps = {
  placeholder: string,
  errorMessage: string,
  error: boolean,
  value?: string,
  onChange?: (event: React.ChangeEvent) => void,
  onKeyDown?: (event: React.KeyboardEvent) => void, 
};

export const AppInput = (props: AppInputProps) => {
  const {
    placeholder,
    value,
    onChange,
    onKeyDown,
    error,
    errorMessage,
  } = props;
  return (
    <AppInputWrapper>
      <WrapperInput
        error={error}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        onKeyDown={onKeyDown}
      />
      <WrapperMessage>
        {error ? errorMessage : null}
      </WrapperMessage>
    </AppInputWrapper>
  );
};
