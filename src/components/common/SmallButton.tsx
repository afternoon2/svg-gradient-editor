import { darken } from 'polished';
import styled from '../../styles/styledComponents';

type SmallButtonProps = {
  width: string;
};

export const SmallButton = styled.button<SmallButtonProps>`
  width: ${props => props.width};
  height: 35px;
  box-sizing: border-box;
  padding: .5em;
  text-transform: uppercase;
  background-color: ${props => props.theme.colors.primary};
  border: none;
  border-radius: 4px;
  transition: 120ms all ease-in-out;
  &:focus {
    outline: 1px solid ${props => props.theme.colors.main_100};
  }
  &:hover {
    cursor: pointer;
    background-color: ${props => darken(0.2, props.theme.colors.primary)};
  }
`;
