import React, { useContext } from 'react';
import { FontAwesomeIcon, FontAwesomeIconProps } from '@fortawesome/react-fontawesome';
import styled, { ThemeContext } from 'styled';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

interface Props {
  icon: IconProp;
  size: FontAwesomeIconProps['size'];
  onClick?: (event: React.MouseEvent) => void;
  href: string;
}

const StyledLink = styled.a`
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
  margin: 0;
  outline: none;
  background-color: transparent;
`;

const LinkIcon: React.FC<Props> = ({
  icon, onClick, href, size,
}) => {
  const theme = useContext(ThemeContext);
  const [color, setColor] = React.useState<string>('');

  React.useEffect(() => setColor(theme.colors.textPrimary), [theme]);

  return (
    <StyledLink onClick={onClick} href={href} target="_blank">
      <FontAwesomeIcon icon={icon} size={size} color={color} />
    </StyledLink>
  );
};

export default LinkIcon;
