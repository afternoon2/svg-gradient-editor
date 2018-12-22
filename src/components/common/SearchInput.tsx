import * as React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from '../../styles/styledComponents';
import { TextInput } from './TextInput';

type SearchInputWrapperProps = {
  width: string;
  disabled?: boolean;
};

const SearchInputWrapper = styled.div<SearchInputWrapperProps>`
  width: ${props => props.width || '100%'};
  height: 35px;
  display: flex;
  align-items: center;
  position: relative;
  .searchInputIcon {
    position: absolute;
    right: .5em;
    z-index: 2;
    color: ${props => props.theme.colors.text};
    margin-left: .5em;
    background-color: ${props => props.theme.colors.main_300};
    opacity: ${props => props.disabled ? 0.5 : 1};
  }
`;

export type SearchInputProps = {
  width: string;
  placeholder: string;
  disabled: boolean;
  onChange: (event: React.ChangeEvent) => void;
};

export const SearchInput = (props: SearchInputProps) => {
  return (
    <SearchInputWrapper
      width={props.width}
      disabled={props.disabled}
    >
      <TextInput
        placeholder={props.placeholder}
        disabled={props.disabled}
        onChange={props.onChange}
      />
      <FontAwesomeIcon 
        className="searchInputIcon"
        icon="search"
      />
    </SearchInputWrapper>
  );
};
