import React, { useContext } from 'react';
import { FontAwesomeIcon, FontAwesomeIconProps } from '@fortawesome/react-fontawesome';
import { ThemeContext } from 'styled';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { StyledLabel, StyledRadio } from './RadioIcon.styled';

interface Props {
  checked: boolean;
  icon: IconProp;
  id: string;
  name: string;
  onChange: (value: string) => void;
  size?: FontAwesomeIconProps['size'];
  value: string;
}

const RadioIcon: React.FC<Props> = ({
  checked, onChange, icon, id, size, name, value,
}) => {
  const theme = useContext(ThemeContext);
  const handleChange = React.useCallback(() => onChange(value), [onChange, value]);
  const [color, setColor] = React.useState<string>('');

  React.useEffect(
    () => setColor(checked ? theme.colors.primary : theme.colors.textPrimary),
    [checked, theme],
  );

  return (
    <StyledLabel htmlFor={id}>
      <StyledRadio type="radio" checked={checked} id={id} name={name} onChange={handleChange} value={value} />
      <FontAwesomeIcon icon={icon} size={size} color={color} />
    </StyledLabel>
  );
};

export default RadioIcon;
