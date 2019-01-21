import styled from '../../../../styles/styledComponents';
import { darken } from 'polished';

export const SHeader = styled.header`
  box-sizing: border-box;
  background-color: ${props => props.theme.colors.main_200};
  padding: .5em;
  display: flex;
  justify-content: space-around;
  width: 100%;
  flex-direction: column;
`;

export const SHeaderContentDivider = styled.div`
  display: flex;
  align-items: center;
`;

export const SHeaderIconButton = styled.button`
  background-color: transparent;
  border: none;
  outline: none;
  text-decoration: none;
  color: ${props => props.theme.colors.text};
  transition: 120ms all ease-in-out;
  &:hover {
    cursor: pointer;
    color: ${props => darken(0.25, props.theme.colors.text)};
  }
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;