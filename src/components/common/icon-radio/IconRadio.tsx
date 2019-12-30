import React, { useContext } from 'react';
import { FontAwesomeIcon, FontAwesomeIconProps } from '@fortawesome/react-fontawesome';
import styled, { ThemeContext } from '../../theme/styledComponents';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

const StyledLabel = styled.label`
  box-sizing: border-box;
  padding: 10px;
  margin: 0;
  outline: none;
  border: none;
  background-color: transparent;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  transition: 120ms all ease-in-out;
`;

const StyledRadio = styled.input.attrs((): { [key: string]: string | Function | boolean } => ({
  type: 'radio',
}))`
  position: absolute;
  top: 300%;
  left: 2000px;
`;

interface Props {
  checked: boolean;
  icon: IconProp;
  id: string;
  name: string;
  onChange: (value: string) => void;
  size?: FontAwesomeIconProps['size'];
  value: string;
}

const IconButton: React.FC<Props> = ({ checked, onChange, icon, id, size, name, value }) => {
  const theme = useContext(ThemeContext);
  const handleChange = React.useCallback(() => onChange(value), [onChange, value]);
  const [color, setColor] = React.useState<string>('');

  React.useEffect(() => setColor(checked ? theme.colors.primary : theme.colors.textPrimary), [checked, theme]);

  return (
    <StyledLabel htmlFor={id}>
      <FontAwesomeIcon icon={icon} size={size} color={color} />
      <StyledRadio type="radio" checked={checked} id={id} name={name} onChange={handleChange} value={value} />
    </StyledLabel>
  );
};

export default IconButton;
