import { darken } from 'polished';
import styled from '../../../../styles/styledComponents';

export const SHeader = styled.header`
  box-sizing: border-box;
  background-color: ${props => props.theme.colors.main_200};
  padding: .5em;
  display: flex;
  justify-content: space-around;
  width: 100%;
  flex-direction: column;
`;

export const SHeaderLink = styled.a`
  text-decoration: none;
  color: ${props => props.theme.colors.text};
  transition: 120ms all ease-in-out;
  margin-left: 1em;
  &:hover {
    cursor: pointer;
    color: ${props => darken(0.05, props.theme.colors.text)};
  }
`;

export const SHeaderContentDivider = styled.div`
  display: flex;
  align-items: center;
`;