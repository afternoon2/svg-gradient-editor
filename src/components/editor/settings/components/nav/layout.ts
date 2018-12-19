import styled from '../../../../../styles/styledComponents';
import { modularSize } from '../../../../../styles/typography';

export const Navbar = styled.nav`
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
`;

export type NavbarButtonProps = {
  active: boolean;
}

export const NavbarButton = styled.button<NavbarButtonProps>`
  width: 50%;
  padding: 1em;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: ${props => props.active ? props.theme.colors.main_200 : props.theme.colors.main_300};
  color: ${props => props.theme.colors.text};
  border: 1px solid ${props => props.theme.colors.main_200};
  outline: none;
  transition: 120ms all ease-in-out;
  &:hover {
    cursor: pointer;
  }
  &:first-child {
    border-right: none;
    border-radius: 3px 0 0 3px;
  }
  &:last-child {
    border-left: none;
    border-radius: 0 3px 3px 0;
  }
  span {
    padding-top: .3em;
    font-size: ${modularSize(1)};
  }
`;
