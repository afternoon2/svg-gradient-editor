import React from 'react';
import { FontAwesomeIcon, FontAwesomeIconProps } from '@fortawesome/react-fontawesome';
import styled from '../../theme/styledComponents';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

const StyledLabel = styled.label`
  box-sizing: border-box;
  padding: 5px;
  margin: 0;
  outline: none;
  border: none;
  background-color: transparent;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  transition: 120ms all ease-in-out;

  .icon {
    color: ${(props): string => props.theme.colors.textPrimary};
  }

  &:hover {
    .icon {
      color: ${(props): string => props.theme.colors.textSecondary};
    }
  }

  .icon:checked {
    & + label {
      color: ${(props): string => props.theme.colors.primary};
    }
  }
`;

const StyledRadio = styled.input.attrs((): { [key: string]: string | Function | boolean } => ({
  type: 'radio',
}))`
  position: absolute;
  top: 300%;
  left: 4000px;
  visibility: hidden;
`;

interface Props {
  checked: boolean;
  icon: IconProp;
  id: string;
  name: string;
  onChange: (event?: React.ChangeEvent) => void;
  size?: FontAwesomeIconProps['size'];
  value: string;
}

const IconButton: React.FC<Props> = ({ checked, onChange, icon, id, size, name, value }) => {
  return (
    <StyledLabel htmlFor={id}>
      <FontAwesomeIcon icon={icon} size={size} className="icon" />
      <StyledRadio type="radio" checked={checked} id={id} name={name} onChange={onChange} value={value} />
    </StyledLabel>
  );
};

export default IconButton;
